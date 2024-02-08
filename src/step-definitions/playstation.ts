import {Given, Then, When} from '@cucumber/cucumber';
import { expect } from 'playwright/test';
import * as sonyPage from '../pages/sony-page';
import * as playStationPage from '../pages/playstation-page'
import * as data from "../../config/data.json";
import * as locator from "../../config/locators.json";


//TODO
/**
 * Unable to implement SONY login functionality before redirecting the tests to Playstation application
 * I have tried various options that I know that are
 *      1. Normal flow using SONY login page and form,  with my SONY account.
 *      2. Tried using Google account login,  with my Gmail account.
 *      3. Preserve login method provided by Playwright using site keys and cookies
 *      4. Record and add the customised script to handle login.
 *      5. I tried to change the USER AGENT on the browser and
 *      6. Tried to reduce the scurity features of a browser and it didnt work
 * 
 *      Currently, I am skipping LOGIN functionality and trying to access Playstation applicaiton.
 */

Given(
    /^the user log into Sony application with valid credentials$/,
    async function() {

        const {
            screen: {page},
        } = this;
        
        sonyPage.navigateToSonyApplication(page, data.sonyUrl);
        acceptCookies(locator.sonyPage_AcceptCookiesBtn);
    }
)

When(
    /^the user select playstation from the menu$/,
    async function() {

        const {
            screen: {page, context},
        } = this;

        sonyPage.clickMenuButton(page);
        const pagePromise = context.waitForEvent('page');
        playStationPage.selectSubMenu(page, 'PlayStation');
        global.playStation = await pagePromise;
        await global.playStation.waitForLoadState();
        acceptCookies(locator.playStationpage_AcceptCookiesBtn);

    }
)

async function acceptCookies(locator:string) {
    
    const acceptButton_PlayStationPage = await global.playStation.locator(locator);
        await acceptButton_PlayStationPage.waitFor({state: "visible"})
        if(await acceptButton_PlayStationPage.isVisible()){
            await acceptButton_PlayStationPage.click();
        }
}

When(
    /^the user on the playstation home page$/,
    async function() {

        playStationPage.verifyPlayStationPageTitle(data.playStationPageTitle);
    }
)

When(
    /^the carousel slides should be displayed as expected$/,
    async function() {

        const listOfSlideItems = await global.playStation.$$(locator.slide_Images);
        verifyDisplayedCarouselSlides(listOfSlideItems);
    
    }
)

async function verifyDisplayedCarouselSlides(listOfSlideItems) {
    
    const arr:string[] = [' Final Fantasy XVI Rebirth keyart', 'Tekken 8 keyart', 'February LNY Sale keyart', 'Like A Dragon keyart', 
                    'Suicide Squad keyart', 'Foamstars keyart'];
        
        var count = 0;
        for(const menu of listOfSlideItems){

            expect (await menu.getAttribute('alt')).toBe(arr[count]);
            count = count + 1;
        }
}

/**
 * Main objective of below step is to capture screenshot of the big banner and compare during the test but commented
 * lines are not working with cucumber for some reason and I was able to achieve through regular TDD test approach.
 * 
 * So, I am trying to compate the property of the banner and confirm the selction of the slide.
 */
When(
    /^the user select the "([^"]*)" only by one$/,
    async function(slideToSelect: string) {

        const listOfSlideItems = await global.playStation.$$(locator.slide_Images);
        clickOnSpecificSlide(listOfSlideItems, slideToSelect);
    }
)

Then(
    /^the user should see the corresponding banner for selected "([^"]*)"$/,
    async function(slideToSelect: string) {

        var banner = locator.specific_Slide;
        const bigBanner = global.playStation.locator(banner.replace('*', slideToSelect));
        expect(await bigBanner.textContent()).toBeVisible();
    }
)

async function clickOnSpecificSlide (listOfSlide, slideToSelect){

    for(const slide of listOfSlide){
        const str = await slide.textContent();
        if(str === slideToSelect){
            await slide.click();
        }
    }
}

async function verifySelectedAndNonSelectedSlides(listOfSlide, selectedSlide){
    
    for(const slide of listOfSlide){
        const str = await slide.textContent();
        if(str !== selectedSlide){
            const attributeVal = await slide.getAttribute('class');
            expect(attributeVal).not.toContain('is-selected');   
        }
    }
}

When(
    /^the user select a specific "([^"]*)" from carousel slides$/,
    async function(slideToSelect: string) {

        const listOfSlides = await global.playStation.$$(locator.slide_Images);
        global.selectedSlide = slideToSelect;
        clickOnSpecificSlide(listOfSlides, slideToSelect);
        
    }
)

Then(
    /^the user should be redirected  to playstation application$/,
    async function() {

       playStationPage.verifyPlayStationPageTitle(data.playStationPageTitle);
    }
)


Then(
    /^the carousel slides should move one by one automatically$/,
    async function() {

        verifySlideMoveAutomatically(locator.classAttributeForSlides);
    }
)

Then(
    /^the user should see the corresponding banner for the selected slide$/,
    async function() {
        
        var banner = locator.specific_Slide;
        const bigBanner = global.playStation.locator(banner.replace('*', global.selectedSlide));
        expect(await bigBanner.textContent()).toBeVisible();
    }
)

Then(
    /^the user should see the other slides should not be selected$/,
    async function() {

        const listOfSlides = await global.playStation.$$(locator.listOfSlides);
        verifySelectedAndNonSelectedSlides(listOfSlides, global.selectedSlide);
    }
)

async function verifySlideMoveAutomatically(locator:string) {
    
    const listOfSlides = await global.playStation.$$(locator);
    let count = 1;
    for(const menu of listOfSlides){
        expect(await menu.getAttribute('class')).toContain('is-selected');
        count = count + 1;
    }
}