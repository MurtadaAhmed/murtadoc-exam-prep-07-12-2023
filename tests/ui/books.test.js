const { test, expect } = require('@playwright/test');

test('Check books page', async ({ page }) => {
    await page.goto('https://murtadoc-exam-prep-07-12-2023.onrender.com/books');
    const list = await page.$('ul');
    expect(list).toBeTruthy();
  });
  