const { LotterySystem } = require('../../src/utils/lottery');

describe('Lottery System Unit Tests', () => {
  let lotterySystem;

  beforeEach(() => {
    lotterySystem = new LotterySystem();
  });

  test('should initialize with empty participants', () => {
    expect(lotterySystem.getParticipants().length).toBe(0);
  });

  test('should add participant correctly', () => {
    const participant = { id: 1, wallet: '0x123...', amount: 5 };
    lotterySystem.addParticipant(participant);
    
    expect(lotterySystem.getParticipants().length).toBe(1);
    expect(lotterySystem.getParticipants()[0]).toEqual(participant);
  });

  test('should not allow duplicate participants', () => {
    const participant = { id: 1, wallet: '0x123...', amount: 5 };
    lotterySystem.addParticipant(participant);
    lotterySystem.addParticipant(participant);
    
    expect(lotterySystem.getParticipants().length).toBe(1);
  });

  test('should select random winner fairly', () => {
    const participants = [
      { id: 1, wallet: '0x111...', amount: 5 },
      { id: 2, wallet: '0x222...', amount: 5 },
      { id: 3, wallet: '0x333...', amount: 5 }
    ];
    
    participants.forEach(p => lotterySystem.addParticipant(p));
    
    const winner = lotterySystem.selectWinner();
    expect(participants).toContainEqual(winner);
  });

  test('should validate participant data', () => {
    const invalidParticipant = { id: 1, wallet: 'invalid', amount: 3 };
    
    expect(() => {
      lotterySystem.addParticipant(invalidParticipant);
    }).toThrow('Invalid participant data');
  });
});
