async function main() {
  const QuantumLottery = await ethers.getContractFactory("QuantumLottery");
  const quantumLottery = await QuantumLottery.deploy();
  
  await quantumLottery.deployed();
  
  console.log("QuantumLottery deployed to:", quantumLottery.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
