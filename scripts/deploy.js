const { ethers } = require("hardhat");

async function main() {
  const RWXToken = await ethers.getContractFactory("RWXToken");
  const rwxToken = await RWXToken.deploy();
  await rwxToken.waitForDeployment();

  console.log("RWXToken deployed to:", await rwxToken.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
