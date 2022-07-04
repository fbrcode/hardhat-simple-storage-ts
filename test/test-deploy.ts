// imports
const { ethers } = require("hardhat");
const { assert, expect } = require("chai");
// describe("SimpleStorage", () => {}); // anonymous function notation #1
// describe("SimpleStorage", function () {}); // anonymous function notation #2

// describe() represents a test suite
describe("SimpleStorage", () => {
  let SimpleStorageFactory;
  let simpleStorage;
  // beforeEach() execute before each test
  beforeEach(async () => {
    SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
    simpleStorage = await SimpleStorageFactory.deploy();
  });
  // it() define a single test
  it("Should start with a favorite number of 0", async () => {
    const favoriteNumber = await simpleStorage.retrieve();
    const expectedFavoriteNumber = "0";
    assert.equal(favoriteNumber.toString(), expectedFavoriteNumber);
    expect(favoriteNumber.toString()).to.equal(expectedFavoriteNumber);
  });
  it("Should update when we call 'store'", async () => {
    const expectedFavoriteNumber = "7";
    const transactionResponse = await simpleStorage.store(
      expectedFavoriteNumber
    );
    await transactionResponse.wait(1); // wait for 1 block confirmation
    const favoriteNumber = await simpleStorage.retrieve();
    assert.equal(favoriteNumber.toString(), expectedFavoriteNumber);
  });
});
