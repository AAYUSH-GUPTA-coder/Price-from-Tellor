// calibration oracle address : 0xb2CB696fE5244fB9004877e58dcB680cB86Ba444
// calibration token address : 0x15e6Cc0D69A162151Cadfba035aa10b82b12b970

const hre = require("hardhat");
const { abi, bytecode } = require("usingtellor/artifacts/contracts/TellorPlayground.sol/TellorPlayground.json")

async function main() {

  // first deploy oracle 
  // let TellorOracle = await hre.ethers.getContractFactory(abi, bytecode);
  // let tellorOracle = await TellorOracle.deploy();
  // await tellorOracle.deployed();

  // calibration oracle address
  const tellorOracleAddress = "0x15e6Cc0D69A162151Cadfba035aa10b82b12b970";

  // then deploy Price.sol smart contract
  let Price = await hre.ethers.getContractFactory("Price");
  // localnet
  // let price = await Price.deploy(tellorOracle.address);
  // testnet
  let price = await Price.deploy(tellorOracleAddress);
  await price.deployed();

  console.log("Price deployed to:", price.address);
}


main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });