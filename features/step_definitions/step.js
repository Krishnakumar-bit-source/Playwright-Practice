const { When, Then, Given} = require('@cucumber/cucumber')
const playwright = require('@playwright/test')
When('the greeter says hello',{timeout : 10000}, async function () {
  const browser = await playwright.chromium.launch({
    headless: false
  })
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https:flipkart.com")
});  

Then('I should have heard {string}', function (string) {
    console.log(string);
  
});