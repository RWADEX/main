const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("RWXToken", function () {
  it("Should have correct name, symbol, and total supply", async function () {
    const RWXToken = await ethers.getContractFactory("RWXToken");
    const rwxToken = await RWXToken.deploy();
    await rwxToken.waitForDeployment();

    expect(await rwxToken.name()).to.equal("RWX Token");
    expect(await rwxToken.symbol()).to.equal("RWX");
    expect(await rwxToken.totalSupply()).to.equal(ethers.parseUnits("1000000000", 18));
  });
});
