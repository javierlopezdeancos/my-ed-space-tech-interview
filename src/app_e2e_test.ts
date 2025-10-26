
import { test, expect } from '@playwright/test';

test.describe('MyEdSpaceApp', () => {
  test('should not show the video to unauthenticated users', async ({ page }) => {
    // Go to root
    await page.goto('/');

    // Not logged user should see 'Please log in to view the livestream.'
    await expect(page.getByText('Please log in to view the livestream.')).toBeVisible();

    // Not logged user shouldn't see the youtube iframe video
    await expect(page.getByTestId('streaming-video-component')).not.toBeVisible();
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

    // Wait for the video to be visible
    await expect(page.getByTestId('streaming-video-component')).toBeVisible();

    // Simulate user interaction click the video play

    // NOTE: this works because we set the timezone locale at UK so the name of the button will be `Play` (in english) but, at others timezones could be break
    await page.locator('iframe[title="Lagwagon May 16"]').contentFrame().getByRole('button', { name: 'Play' }).click();

    // Check if the event is displayed in the EventsComponent
    await expect(page.getByText('play')).toBeVisible();
  });
});


