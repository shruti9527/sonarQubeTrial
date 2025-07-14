const {Builder, By, until} = require('selenium-webdriver');

(async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('http://localhost/');
        let body = await driver.findElement(By.tagName('body')).getText();
        if (body === "Hello World!") {
            console.log("Test passed: 'Hello World!' found on page.");
        } else {
            throw new Error("Test failed: Unexpected page content: " + body);
        }
    } finally {
        await driver.quit();
    }
})();
