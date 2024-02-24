const { test, expect } = require('@playwright/test');

test('Check add book page', async ({ page }) => {
    await page.goto('https://murtadoc-exam-prep-07-12-2023.onrender.com/add-book');
    const form = await page.$('form');
    expect(form).toBeTruthy();
  });
  