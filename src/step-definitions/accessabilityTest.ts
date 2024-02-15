import { Then } from '@cucumber/cucumber'
import {getViolations, injectAxe} from 'axe-playwright'
import { ScenarioWorld } from './setup/world'
import {createHtmlReport} from "axe-html-reporter"
import {env} from "../env/parseEnv"

Then(
    /^the user inject axe accessibility engine$/,
    async function(this: ScenarioWorld) {
        const {
            screen: { page },
        } = this

        await injectAxe(page)
    }
)

Then(
    /^the user generate an accessibility analysis report$/,
    async function (this: ScenarioWorld) {
        const {
            screen: { page }
        } = this
        const currentPage = await page.title()
        createHtmlReport({ results: { violations: await getViolations(page)},
            
            options: {
                outputDir: `${env('ACCESSIBILITY_REPORT_PATH')}`,
                reportFileName: `${currentPage}-${env('HTML_ACCESSIBILITY_FILE')}`,
            }
        })
    }
)