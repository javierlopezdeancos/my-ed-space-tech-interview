import { test, expect } from '@playwright/test';

test.describe('MyEdSpaceApp', () => {
  test('should not show the video to unauthenticated users', async ({
    page,
  }) => {
    // Go to root
    await page.goto('/');

    // Not logged user should see 'Please log in to view the livestream.'
    await expect(
      page.getByText('Please log in to view the livestream.')
    ).toBeVisible();

    // Not logged user shouldn't see the youtube iframe video
    await expect(
      page.getByTestId('streaming-video-component')
    ).not.toBeVisible();
  });

  test.use({
    locale: 'en-GB',
    timezoneId: 'Europe/London',
  });

  test('should track user interactions correctly', async ({ page }) => {
    // Go to root
    await page.goto('/');

    // Login
    await page.getByRole('button', { name: 'Login' }).click();

    // Wait for the video component to be visible
    const videoComponent = page.getByTestId('streaming-video-component');
    await expect(videoComponent).toBeVisible();

    // Wait for the iframe to load
    const frame = page.frameLocator('iframe[title="Lagwagon May 16"]');
    await expect(frame).toBeTruthy();

    // Wait for the YouTube player to be fully loaded
    // Give YouTube iframe API time to initialize
    await page.waitForTimeout(3000);

    // Click play using YouTube's API
    await page.evaluate(() => {
      // Access the iframe and its contentWindow
      const iframe = document.querySelector('iframe');

      if (iframe && iframe.contentWindow) {
        // Send play command to YouTube player
        iframe.contentWindow.postMessage(
          '{"event":"command","func":"playVideo","args":""}',
          '*'
        );
      }
    });

    // First wait for the event list to be visible
    await expect(page.locator('ul')).toBeVisible({ timeout: 5000 });

    // Then wait for the play event to appear in the list
    await expect(
      page.locator('ul li').filter({ hasText: 'play' }).first()
    ).toBeVisible({ timeout: 15000 });
  });
});
