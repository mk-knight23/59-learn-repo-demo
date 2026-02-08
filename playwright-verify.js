import { chromium } from 'playwright';

const PORT = 5173;
const URL = `http://localhost:${PORT}`;

async function verifyApp() {
  console.log('Starting Playwright browser verification...');
  console.log(`Opening ${URL}...`);

  const browser = await chromium.launch({
    headless: false,
    devtools: true
  });

  const context = await browser.newContext({
    viewport: { width: 1280, height: 800 }
  });

  const page = await context.newPage();

  // Capture console logs
  const consoleLogs = [];
  page.on('console', msg => {
    const log = `[${msg.type()}] ${msg.text()}`;
    consoleLogs.push(log);
    console.log('Console:', log);
  });

  // Capture errors
  const errors = [];
  page.on('pageerror', error => {
    errors.push(error.message);
    console.error('Page error:', error.message);
  });

  // Capture network failures
  const networkFailures = [];
  page.on('response', response => {
    if (response.status() >= 400) {
      const failure = `${response.url()} - ${response.status()}`;
      networkFailures.push(failure);
      console.error('Network failure:', failure);
    }
  });

  try {
    // Navigate to the app
    await page.goto(URL, { waitUntil: 'networkidle', timeout: 30000 });
    console.log('Page loaded successfully');

    // Wait a moment for everything to render
    await page.waitForTimeout(3000);

    // Take screenshot
    await page.screenshot({
      path: '/Users/mkazi/60 Projects/screenshots/starters/starter-59.png',
      fullPage: true
    });
    console.log('Screenshot saved to /Users/mkazi/60 Projects/screenshots/starters/starter-59.png');

    // Check for page content
    const content = await page.content();
    const hasContent = content.length > 1000;
    const hasTitle = await page.title().then(t => t.length > 0);

    console.log('\n=== VERIFICATION RESULTS ===');
    console.log('Page loaded:', true);
    console.log('Has content:', hasContent);
    console.log('Has title:', hasTitle);
    console.log('Console errors:', errors.length);
    console.log('Network failures:', networkFailures.length);

    if (errors.length > 0) {
      console.log('\nErrors found:');
      errors.forEach(e => console.log(' -', e));
    }

    if (networkFailures.length > 0) {
      console.log('\nNetwork failures:');
      networkFailures.forEach(f => console.log(' -', f));
    }

    // Keep browser open for a few seconds to see DevTools
    console.log('\nKeeping browser open for 5 seconds...');
    await page.waitForTimeout(5000);

    const success = errors.length === 0 && networkFailures.length === 0 && hasContent;
    console.log('\nOverall verification:', success ? 'PASSED' : 'FAILED');

    await browser.close();
    process.exit(success ? 0 : 1);

  } catch (error) {
    console.error('Verification failed:', error.message);
    await browser.close();
    process.exit(1);
  }
}

verifyApp();
