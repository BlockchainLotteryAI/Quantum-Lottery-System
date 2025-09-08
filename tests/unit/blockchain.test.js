const { BlockchainService } = require('../../src/services/blockchain');

describe('Blockchain Service Unit Tests', () => {
  let blockchainService;

  beforeEach(() => {
    blockchainService = new BlockchainService();
  });

  test('should validate wallet address', () => {
    const validAddress = '0x742d35Cc6634C0532925a3b844Bc454e4438f44e';
    const invalidAddress = 'invalid-address';
    
    expect(blockchainService.isValidWallet(validAddress)).toBe(true);
    expect(blockchainService.isValidWallet(invalidAddress)).toBe(false);
  });

  test('should process transaction correctly', async () => {
    const transaction = {
      from: '0x111...',
      to: '0x222...',
      amount: 5,
      currency: 'DASH'
    };
    
    const result = await blockchainService.processTransaction(transaction);
    expect(result.success).toBe(true);
    expect(result.transactionHash).toMatch(/^0x[a-fA-F0-9]{64}$/);
  });

  test('should verify transaction on blockchain', async () => {
    const txHash = '0x1234567890abcdef...';
    const verification = await blockchainService.verifyTransaction(txHash);
    
    expect(verification.confirmed).toBe(true);
    expect(verification.blockNumber).toBeGreaterThan(0);
  });
});
