import { test, expect } from '@playwright/test';

test('homepage loads with hero content', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: /shoumik aggarwal/i }).first()).toBeVisible();
  await expect(page.getByRole('link', { name: /view .* projects/i })).toBeVisible();
});

test('sections render and nav anchors work', async ({ page }) => {
  await page.goto('/');
  for (const id of ['about', 'projects', 'skills', 'contact']) {
    await expect(page.locator(`#${id}`)).toBeAttached();
  }
  await page.getByRole('navigation', { name: /main/i }).getByRole('link', { name: 'Projects' }).click();
  await expect(page).toHaveURL(/#projects$/);
});
