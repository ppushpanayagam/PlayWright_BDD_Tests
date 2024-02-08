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

async function selectMenuItem(listOfMenu, menuToSelect:string){
    
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
    selectMenuItem(listOfMenu, menu);
};