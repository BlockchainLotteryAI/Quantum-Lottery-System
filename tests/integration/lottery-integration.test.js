const { LotterySystem } = require('../../src/utils/lottery');
const { BlockchainService } = require('../../src/services/blockchain');
const { AIService } = require('../../src/services/ai');

describe('Lottery System Integration Tests', () => {
  let lotterySystem;
  let blockchainService;
  let aiService;

  beforeEach(() => {
    lotterySystem = new LotterySystem();
    blockchainService = new BlockchainService();
    aiService = new AIService();
  });

  test('should complete full lottery cycle', async () => {
    // Add participants
    const participants = [
      { id: 1, wallet: '0x111...', amount: 5 },
      { id: 2, wallet: '0x222...', amount: 5 },
      { id: 3, wallet: '0x333...', amount: 5 }
    ];
    
    participants.forEach(p => lotterySystem.addParticipant(p));
    
    // Process transactions
    for (const participant of participants) {
      const transaction = {
        from: participant.wallet,
        to: process.env.LOTTERY_WALLET,
        amount: participant.amount,
        currency: 'DASH'
      };
      
      const result = await blockchainService.processTransaction(transaction);
      expect(result.success).toBe(true);
    }
    
    // Select winner using AI
    const winner = aiService.selectWinner(lotterySystem.getParticipants());
    expect(participants).toContainEqual(winner);
    
    // Verify winner payout
    const payoutTransaction = {
      from: process.env.LOTTERY_WALLET,
      to: winner.wallet,
      amount: 0.8, // BTC equivalent
      currency: 'BTC'
    };
    
    const payoutResult = await blockchainService.processTransaction(payoutTransaction);
    expect(payoutResult.success).toBe(true);
  });
});
