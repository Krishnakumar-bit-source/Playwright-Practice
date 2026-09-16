const {test, expect} = require('@playwright/test');
let page;
let context;


test.beforeAll(async({browser}) =>
{
    context =  await browser.newContext();
    page =   await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    // await expect(pageNew).toHaveTitle("Rahul Shetty Academy")
    await page.locator("input#username").fill("rahulshettyacademy");
    await page.locator("#password").fill("Learning@830$3mK2");
    await page.locator("input.btn").click();
    await page.pause();
})

test('Browser fixture', async({browser}) =>
{
    const context =  await browser.newContext();
    const pageNew =   await context.newPage();
    await pageNew.goto("https://rahulshettyacademy.com/loginpagePractise/");
    // await expect(pageNew).toHaveTitle("Rahul Shetty Academy")
    await pageNew.locator("input#username").fill("test@gmail.com");
    await pageNew.locator("#password").fill("test");
    await pageNew.locator("input.btn").click();
    console.log(await pageNew.locator("[style*='block']").textContent());
    await expect(pageNew.locator("[style*='block']")).toContainText("Incorrect")
    await pageNew.locator("input#username").fill("rahulshettyacademy");
    await pageNew.locator("#password").fill("Learning@830$3mK2");
    await pageNew.locator("input.btn").click();
    console.log(await pageNew.locator(".card-body a").first().textContent());
    window.coo
});

test('Page fixture', async({page}) =>
{
    await page.goto("https://rahulshettyacademy.com/client/auth/login");
    await page.locator("input#userEmail").fill("dummybaba@gmail.com");
    await page.locator("#userPassword").fill("Test@123");
    await page.locator("input.login-btn").click();
    const products = page.locator(".card-body");
    await products.nth(1).waitFor();
    const count = await products.count();
    for(let i=0; i<count; i++){
      if (await products.nth(i).locator("b").textContent() === "ZARA COAT 3"){
        await products.nth(i).locator("text= Add To Cart").click();
        break;
      }  
    }
    await page.locator("[routerlink*='cart']").click();
    await page.locator("div li").first().waitFor();
    const flag = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
    expect(flag).toBeTruthy();
    await page.locator("text=Checkout").click();
    await page.locator("[placeholder='Select Country']").pressSequentially("ind");
    await page.locator(".ta-results").waitFor();
    await page.locator("button:has-text(' India')").click();
    await page.pause();
});

test('UI dropdowns', async({browser}) =>
{
    const context =  await browser.newContext();
    const pageNew =   await context.newPage();
    await pageNew.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const dropdown = pageNew.locator("select.form-control");
    const radioButton = pageNew.locator("span.checkmark");
    await dropdown.selectOption("teach");
    // await radioButton.last().click();
    await expect(radioButton.last()).toBeChecked();
    // await pageNew.pause();
    // await pageNew.locator("input#username").fill("test@gmail.com");
    // await pageNew.locator("#password").fill("test");
    // await pageNew.locator("input.btn").click();
    // console.log(await pageNew.locator("[style*='block']").textContent());
    // await expect(pageNew.locator("[style*='block']")).toContainText("Incorrect")
    // await pageNew.locator("input#username").fill("rahulshettyacademy");
    // await pageNew.locator("#password").fill("Learning@830$3mK2");
    // await pageNew.locator("input.btn").click();
    // console.log(await pageNew.locator(".card-body a").first().textContent());
});

test('Window Handles', async() =>
{
    // const context =  await browser.newContext();
    // const page =   await context.newPage();
    await page.goto("https://rahulshettyacademy.com/angularpractice/shop");
    const documentLink = page.locator("[href*='documents-request']");
    await page.pause();
    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        documentLink.click()
    ])
    const sampleText = await page.locator("p.red").textContent();
    const arraySplit = sampleText.split("@");
    const domain = arraySplit[1].split(" ")[0];
    console.log(domain);
    await page.locator("input#username").fill(domain);

});