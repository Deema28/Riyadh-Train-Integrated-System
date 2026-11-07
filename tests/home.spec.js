const { test, expect } = require('@playwright/test');

const SITE = 'https://deema28.github.io/Riyadh-Train-Integrated-System';

test('home page loads with a title', async ({ page }) => {
  await page.goto(`${SITE}/home.html`);
  await expect(page).toHaveTitle(/.+/);
});

test('login page loads', async ({ page }) => {
  await page.goto(`${SITE}/login.html`);
  await expect(page).toHaveTitle(/.+/);
});

test('schedule page loads', async ({ page }) => {
  await page.goto(`${SITE}/schedule.html`);
  await expect(page).toHaveTitle(/.+/);
});
