import {Given, Then, When} from '@cucumber/cucumber';
import * as sonyPage from '../pages/sony-page';
import * as playStationPage from '../pages/playstation-page'
import * as data from "../../config/data.json";

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
        
        await sonyPage.navigateToSonyApplication(page, data.sonyUrl)
        await sonyPage.verifySonyPageTitle(page, data.sonyPageTitle)
        await sonyPage.clickAcceptCookiesBtn(page)
    }
)

When(
    /^the user select playstation from the menu$/,
    async function() {

        const {
            screen: {page, context},
        } = this;

        await sonyPage.clickMenuButton(page);
        const pagePromise = context.waitForEvent('page');
        await playStationPage.selectSubMenu(page, 'PlayStation');
        global.playStation = await pagePromise;
        await global.playStation.waitForLoadState();
        await playStationPage.clickAcceptCookiesBtn()

    }
)

When(
    /^the user on the playstation home page$/,
    async function() {

        await playStationPage.verifyPlayStationPageTitle(data.playStationPageTitle);
    }
)

When(
    /^the carousel slides should be displayed as expected$/,
    async function() {

        await playStationPage.verifyDisplayedCarouselSlides()
    
    }
)


/**
 * Main objective of below step is to capture screenshot of the big banner and compare during the test but commented
 * lines are not working with cucumber for some reason and I was able to achieve through regular TDD test approach.
 * 
 * So, I am trying to compate the property of the banner and confirm the selction of the slide.
 */
When(
    /^the user select the "([^"]*)" only by one$/,
    async function(slideToSelect: string) {

        await playStationPage.clickOnSpecificSlideToViewTheBanner(slideToSelect);
    }
)

Then(
    /^the user should see the corresponding banner for selected "([^"]*)"$/,
    async function(slideToSelect: string) {

        await playStationPage.verifyWhetherSelectedSlideIsDisplayed(slideToSelect)
    }
)

When(
    /^the user select a specific "([^"]*)" from carousel slides$/,
    async function(slideToSelect: string) {

        await playStationPage.clickOnSpecificSlideToViewTheBanner(slideToSelect);
    }
)

Then(
    /^the user should be redirected  to playstation application$/,
    async function() {

       await playStationPage.verifyPlayStationPageTitle(data.playStationPageTitle);
    }
)


Then(
    /^the carousel slides should move one by one automatically$/,
    async function() {

        await playStationPage.verifyMovingSlidesAutomatically()
    }
)

Then(
    /^the user should see the corresponding banner for the selected "([^"]*)"$/,
    async function(selectedSlide:string) {
        
        await playStationPage.verifyWhetherBannerDisplayedForSelectedSlide(selectedSlide);
    }
)

Then(
    /^the user should see the other "([^"]*)" should not be selected$/,
    async function(slides:string) {

        await playStationPage.verifyNonSelectedSlides(slides)
    }
)
