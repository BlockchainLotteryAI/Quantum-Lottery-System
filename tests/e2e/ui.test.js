const { test, expect } = require('@playwright/test');

test.describe('Lottery UI E2E Tests', () => {
  test('should load homepage correctly', async ({ page }) => {
    await page.goto('http://localhost:3000');
    
    await expect(page).toHaveTitle('AI Blockchain Lottery');
    await expect(page.locator('h1')).toContainText('World\'s First AI-Powered Blockchain Lottery');
  });

  test('should allow user registration', async ({ page }) => {
    await page.goto('http://localhost:3000/register');
    
    await page.fill('#name-input', 'Test User');
    await page.fill('#email-input', 'test@example.com');
    await page.fill('#wallet-input', '0x742d35Cc6634C0532925a3b844Bc454e4438f44e');
    
    await page.click('button[type="submit"]');
    
    await expect(page.locator('.success-message')).toContainText('Registration successful');
  });

  test('should process deposit transaction', async ({ page }) => {
    await page.goto('http://localhost:3000/deposit');
    
    await page.fill('#tx-hash-input', '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef');
    await page.click('#verify-deposit');
    
    await expect(page.locator('.transaction-status')).toContainText('verified');
  });

  test('should display lottery results', async ({ page }) => {
    await page.goto('http://localhost:3000/results');
    
    await expect(page.locator('.winner-info')).toBeVisible();
    await expect(page.locator('.prize-amount')).toContainText('0.8 BTC');
  });
});
