const { AIService } = require('../../src/services/ai');

describe('AI Service Unit Tests', () => {
  let aiService;

  beforeEach(() => {
    aiService = new AIService();
  });

  test('should generate random numbers with proper distribution', () => {
    const results = [];
    const iterations = 1000;
    
    for (let i = 0; i < iterations; i++) {
      results.push(aiService.generateRandomNumber(1, 100));
    }
    
    const average = results.reduce((a, b) => a + b, 0) / iterations;
    expect(average).toBeGreaterThan(45);
    expect(average).toBeLessThan(55);
  });

  test('should detect anomalies in participant data', () => {
    const normalData = { wallet: '0x123...', amount: 5, timestamp: Date.now() };
    const anomalousData = { wallet: '0x123...', amount: 5000, timestamp: Date.now() };
    
    expect(aiService.detectAnomalies(normalData)).toBe(false);
    expect(aiService.detectAnomalies(anomalousData)).toBe(true);
  });

  test('should provide fairness metrics', async () => {
    const participants = Array(1000).fill().map((_, i) => ({
      id: i + 1,
      wallet: `0x${i.toString(16).padStart(40, '0')}`,
      amount: 5
    }));
    
    const metrics = await aiService.calculateFairnessMetrics(participants);
    
    expect(metrics.entropy).toBeGreaterThan(0.9);
    expect(metrics.randomnessScore).toBeGreaterThan(0.8);
  });
});
