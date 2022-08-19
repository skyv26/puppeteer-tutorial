const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false // If you marked headless as true then browser will do work headlessly
  });
  const page = await browser.newPage(); // It will open a new tab or page on chromium browser.
  await page.goto('https://example.com');  // It will take screenshot of the current web browser page.
  await browser.close(); // by deleting this line it will stop chromium automically close .
})();