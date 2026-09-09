import { test, expect } from '@playwright/test';

test.describe('Visual Regression - Character Shortcodes Post', () => {
  test.skip(({ browserName }) => browserName === 'webkit', 'Skip visual tests on Safari mobile due to rendering variability');

  test('character shortcodes post visual comparison - light theme', async ({ page }) => {
    test.setTimeout(45000);

    // Set theme via localStorage before navigation so it initializes correctly
    await page.addInitScript(() => {
      localStorage.setItem('theme-storage', 'light');
    });

    await page.goto('/posts/character-shortcodes');
    await page.waitForLoadState('networkidle');

    await expect(page).toHaveScreenshot('character-shortcodes-light.png');
  });

  test('character shortcodes post visual comparison - dark theme', async ({ page }) => {
    test.setTimeout(45000);

    // Set theme via localStorage before navigation so it initializes correctly
    await page.addInitScript(() => {
      localStorage.setItem('theme-storage', 'dark');
    });

    await page.goto('/posts/character-shortcodes');
    await page.waitForLoadState('networkidle');

    await expect(page).toHaveScreenshot('character-shortcodes-dark.png');
  });
});
