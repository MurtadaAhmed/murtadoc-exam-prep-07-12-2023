const { test, expect } = require('@playwright/test');

test('Check header', async ({ page }) => {
    await page.goto('https://murtadoc-exam-prep-07-12-2023.onrender.com');  // you can replace this URL with any page that includes the header
    const homeLink = await page.$('a[href="/"]');
    const text = await homeLink.textContent();
    expect(text).toBe('Home');
  });
  