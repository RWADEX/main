require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    base: {
      url: "YOUR_BASE_RPC_URL", // Replace with your Base RPC URL
      accounts: ["YOUR_PRIVATE_KEY"] // Replace with your private key
    }
  }
};
