import { Page, BrowserContext } from 'playwright';
import { expect } from 'playwright/test';
import * as locator from "../../config/locators.json";


export const verifyPlayStationPageTitle = async (
    expectedValue: string
): Promise<void> => {
    expect(await global.playStation.title()).toBe(expectedValue);
};

export const clickAcceptCookiesBtn = async (
    
): Promise<void> => {
    const acceptButton_PlayStationPage = await global.playStation.locator(locator.playStationpage_AcceptCookiesBtn);
    await acceptButton_PlayStationPage.waitFor({state: "visible"})
    if(await acceptButton_PlayStationPage.isVisible()){
        await acceptButton_PlayStationPage.click();
    }
};

async function acceptCookies(locator:string) {
    
    const acceptButton_PlayStationPage = await global.playStation.locator(locator);
        await acceptButton_PlayStationPage.waitFor({state: "visible"})
        if(await acceptButton_PlayStationPage.isVisible()){
            await acceptButton_PlayStationPage.click();
        }
}

async function selectAnItemFromList(listOfMenu, menuToSelect:string){
    
    for(const menu of listOfMenu){
        let subMenu = await menu.textContent();
        if(subMenu.includes(menuToSelect)){
            await menu.click();
            break;
        }
    }
}

export const selectSubMenu = async (
    page: Page,
    menu: string
): Promise<void> => {
        
    const listOfMenu = await page.$$(locator.subMenu_List);
    selectAnItemFromList(listOfMenu, menu);
};

export const clickSpecificSlide = async (
    slideToSelect: string
): Promise<void> => {
        
    const listOfSlides = await global.playStaionPage.$$(locator.slide_Images);
    selectAnItemFromList(listOfSlides, slideToSelect);
};

export const verifyDisplayedCarouselSlides = async (
    
): Promise<void> => {
        
    const listOfSlideItems = await global.playStation.$$(locator.slide_Images);
        await verifyCarouselSlides(listOfSlideItems);
};


async function verifyCarouselSlides(listOfSlideItems) {
    
    const arr:string[] = ['Helldivers 2 keyart', ' Final Fantasy XVI Rebirth keyart', 'Ultros keyart', 'Tekken 8 keyart', 
                            'COD Modern Warfare season 2 keyart', 'Overwatch 2 - Season 9 keyart'];
        
        var count = 0;
        for(const menu of listOfSlideItems){

            expect (await menu.getAttribute('alt')).toBe(arr[count]);
            count = count + 1;
        }
}


export const verifyWhetherSelectedSlideIsDisplayed = async (
        slideToSelect:string
    ): Promise<void> => {
            
        const bigBanner = locator.specific_Slide.replace('*', slideToSelect);
        expect(await global.playStation.locator(bigBanner).getAttribute('alt')).toBe(slideToSelect);
    };

    export const verifyWhetherBannerDisplayedForSelectedSlide = async (
        selectedSlide:string
    ): Promise<void> => {
            
        var banner = locator.specific_Slide;
        const bigBanner = await global.playStation.locator(banner.replace('*', selectedSlide));
        expect(await bigBanner).toBeVisible();
    };

    export const verifyNonSelectedSlides = async (
        slides:string
    ): Promise<void> => {
            
        const listOfSlides = await global.playStation.$$(locator.listOfSlides);
        await verifySelectedAndNonSelectedSlides(listOfSlides, slides);
    };

    async function verifySelectedAndNonSelectedSlides(listOfSlide, selectedSlide:string){
    
        for(const slide of listOfSlide){
            let selector = locator.specificSlide.replace('*', selectedSlide);
            const str = await global.playStation.locator(selector).getAttribute('alt');
            if(str !== selectedSlide){
                const attributeVal = await slide.getAttribute('class');
                expect(attributeVal).not.toContain('is-selected');   
            }
        }
    }

    export const clickOnSpecificSlideToViewTheBanner = async (
        slideToSelect:string
    ): Promise<void> => {
            
        const listOfSlides = await global.playStation.$$(locator.slide_Images);
        await clickOnSpecificSlide(listOfSlides, slideToSelect);
    };

    async function clickOnSpecificSlide (listOfSlide, slideToSelect){

        for(const slide of listOfSlide){
            const str = await slide.getAttribute('alt');
            if(str === slideToSelect){
                await slide.click();
            }
        }
    }

    export const verifyMovingSlidesAutomatically = async (
        
    ): Promise<void> => {
            
        await verifySlideMoveAutomatically(locator.classAttributeForSlides);
    };

    async function verifySlideMoveAutomatically(locator:string) {
    
        const listOfSlides = await global.playStation.$$(locator);
        let count = 1;
        for(const menu of listOfSlides){
            expect(await menu.getAttribute('class')).toContain('is-selected');
            await global.playStation.waitForTimeout(3000)
            count = count + 1;
        }
    }