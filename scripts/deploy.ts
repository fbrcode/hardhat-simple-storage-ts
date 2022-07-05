// imports
import { ethers, run, network } from "hardhat";

// async main
async function main() {
  const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
  console.log("Deploying SimpleStorage contract...");
  const simpleStorage = await SimpleStorageFactory.deploy();
  await simpleStorage.deployed();
  console.log(`SimpleStorage contract deployed at ${simpleStorage.address}`);
  // only verify when not on the hardhat network
  if (network.config.chainId === 4 && process.env.ETHERSCAN_API_KEY) {
    // rinkeby
    console.log("waiting for block transactions...");
    await simpleStorage.deployTransaction.wait(6); // wait for 6 block confirmations before verifying
    await verify(simpleStorage.address, []);
  }

  // get favorite number current value
  const currentValue = await simpleStorage.retrieve();
  console.log(`SimpleStorage favorite number current value: ${currentValue}`);

  // store favorite number as 7
  const transactionResponse = await simpleStorage.store(7);
  await transactionResponse.wait(1); // wait for 1 block confirmation
  const updatedValue = await simpleStorage.retrieve();
  console.log(`SimpleStorage favorite number updated value: ${updatedValue}`);
}

// verify contract deployment

// declare with function notation
// async function verify(contractAddress, args) {

// declare with variable association
const verify = async (contractAddress: string, args: any[]) => {
  console.log("Verifying contract...");
  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: args,
    });
  } catch (error: any) {
    if (error.message.includes("already verified")) {
      console.log("Already verified!");
    } else {
      console.log(error);
    }
  }
};

// main
main()
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
