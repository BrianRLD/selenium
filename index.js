const {By, Key, Builder} = require("selenium-webdriver");
require("chromedriver");

async function test_case(){
    let driver = await new Builder().forBrowser("chrome").build();

    await driver.get("https://google.com");

    await driver.findElement(By.name("q")).sendKeys("hello, world!", key.RETURN);

    setInterval(function(){
        driver.quit();
    }, 10000);
}

test_case();