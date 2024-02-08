import { Page} from 'playwright';
import { expect } from 'playwright/test';
import * as locator from "../../config/locators.json";


export const navigateToSonyApplication = async (
    page: Page,
    url: string,
): Promise<void> => {
   await page.goto(url);
};

export const verifySonyPageTitle = async (
    page: Page,
    expectedValue: string
): Promise<void> => {
    const title = await page.title();
    expect(title).toBe(expectedValue);
};

export const clickAcceptCookiesBtn = async (
    page: Page,
): Promise<void> => {
        const acceptButton = await page.locator(locator.sonyPage_AcceptCookiesBtn);
        await acceptButton.waitFor({state: "visible"})
        if(await acceptButton.isVisible()){
            await acceptButton.click();
        }
};

export const clickMenuButton = async (
    page: Page,
): Promise<void> => {
        const menuButton = await page.locator(locator.sonyPage_menuButton);
        await menuButton.click();
};

export const inputValue = async (
    page: Page,
    elementIdentifier: string,
    input: string
): Promise<void> => {
    await page.focus(elementIdentifier);
    await page.fill(elementIdentifier, input);
};