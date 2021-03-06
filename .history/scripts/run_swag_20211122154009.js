const main = async () => {
  const waveContractFactory = await hre.ethers.getContractFactory("SwagBag");
  const waveContract = await waveContractFactory.deploy({
    value: hre.ethers.utils.parseEther("0.1"),
  });
  await waveContract.deployed();
  console.log(`Deployed WavePortal at ${waveContract.address}`);

  let contractBalance = await hre.ethers.provider.getBalance(
    waveContract.address
  );
  console.log(
    `Contract balance: ${hre.ethers.utils.formatEther(contractBalance)} ether`
  );

  // Testing the waves
  let waveTxn = await waveContract.wave("Hello /wave!");
  await waveTxn.wait();

  let waveTxn2 = await waveContract.wave("Another /wave");
  await waveTxn2.wait();

  contractBalance = await hre.ethers.provider.getBalance(waveContract.address);
  console.log(
    `Contract balance: ${hre.ethers.utils.formatEther(contractBalance)} ether`
  );

  let allWaves = await waveContract.getAllWaves();
  console.log(allWaves);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
