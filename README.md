To RUN the test: ./run_tests.sh dev    (you can use any tag like smoke or regression)
To change the browser setting - Please go to env -> common.env -> UI_AUTOMATION_BROWSER
To run the test on Headless mode - Please go to world.ts file under src -> step-definitions -> setup -> world.ts
    headless: process.env.HEADLESS === 'true',
Reports and videos are available under reporters folder


