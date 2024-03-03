import { Page } from "playwright";

export const clickButton = async (
    page: Page,
    locator: string
    ): Promise<void> => {
        const btn = await page.locator(locator);
        await btn.waitFor({state: "visible"})
        if(await btn.isVisible()){
            await btn.click();
        }
    };