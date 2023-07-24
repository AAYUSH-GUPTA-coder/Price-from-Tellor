require("@nomicfoundation/hardhat-toolbox")
require("dotenv").config()

const PRIVATE_KEY = process.env.PRIVATE_KEY
module.exports = {
    solidity: {
        version: "0.8.17",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000,
            details: { yul: false },
          },
        },
      },
    defaultNetwork: "calibrationnet",
    networks: {
        calibrationnet: {
            chainId: 314159,
            url: "https://api.calibration.node.glif.io/rpc/v1",
            accounts: [PRIVATE_KEY],
        },
        filecoinmainnet: {
            chainId: 314,
            url: "https://api.node.glif.io",
            accounts: [PRIVATE_KEY],
        },
    },
    paths: {
        sources: "./contracts",
        tests: "./test",
        cache: "./cache",
        artifacts: "./artifacts",
    },
}