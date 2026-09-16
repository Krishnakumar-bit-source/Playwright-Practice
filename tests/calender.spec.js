const {test, expect} = require('@playwright/test');

test('Calender validation', async({browser}) =>
{
    const context =  await browser.newContext();
    const pageNew =   await context.newPage();
    await pageNew.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
    const date = "15";
    const month = "07";
    const year = "2027";
    const calenderInti = pageNew.locator(".react-date-picker__inputGroup");
    
});