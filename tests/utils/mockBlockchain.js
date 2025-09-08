class MockBlockchain {
  constructor() {
    this.transactions = new Map();
    this.blockNumber = 0;
  }

  async processTransaction(tx) {
    const txHash = `0x${Math.random().toString(16).substr(2, 64)}`;
    this.transactions.set(txHash, {
      ...tx,
      blockNumber: ++this.blockNumber,
      status: 'confirmed',
      timestamp: Date.now()
    });
    
    return {
      success: true,
      transactionHash: txHash
    };
  }

  async verifyTransaction(txHash) {
    const tx = this.transactions.get(txHash);
    return {
      confirmed: !!tx,
      blockNumber: tx?.blockNumber || 0,
      timestamp: tx?.timestamp || 0
    };
  }

  isValidWallet(address) {
    return /^0x[a-fA-F0-9]{40}$/.test(address);
  }
}

module.exports = { MockBlockchain };
