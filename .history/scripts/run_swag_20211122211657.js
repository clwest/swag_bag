const main = async () => {
  const swagContractFactory = await hre.ethers.getContractFactory("SwagBag");
  const swagContract = await swagContractFactory.deploy({
    value: hre.ethers.utils.parseEther("0.1"),
  });
  await swagContract.deployed();
  console.log(`Deployed WavePortal at ${swagContract.address}`);

  let contractBalance = await hre.ethers.provider.getBalance(
    swagContract.address
  );
  console.log(
    `Contract balance: ${hre.ethers.utils.formatEther(contractBalance)} ether`
  );

  // Testing the waves
  let waveTxn = await swagContract.wave("Hello /wave!");
  await waveTxn.wait();

  let waveTxn2 = await swagContract.wave("Another /wave");
  await waveTxn2.wait();

  contractBalance = await hre.ethers.provider.getBalance(swagContract.address);
  console.log(
    `Contract balance: ${hre.ethers.utils.formatEther(contractBalance)} ether`
  );

  let allWaves = await swagContract.getAllWaves();
  console.log(allWaves);
  
  let totalWaves = await swagContract.getTotalWaves();
  console.log(totalWaves);

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
