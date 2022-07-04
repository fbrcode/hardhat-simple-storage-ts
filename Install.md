# Simple Storage Hardhat Version

This is a training of simple storage code using hardhat.

## Install steps

1. `git init -y`
2. `nvm use lts/gallium`
3. `yarn init -y`
4. `yarn add --dev hardhat`
5. `yarn hardhat`

## Node Modules

At `@` packages are called **scoped packages** that allow npm/yarn packages to be namespaced. This allows organizations to make it clear which packages are **official** and which ones are not. For example `@angular` is published by Angular ore team.

In this case, `@nomiclabs` is created by the hardhat team.

## Hardhat config

The file `hardhat.config.js` is the top level hardhat configuration file. It is the entry-point for any scripts we are going to write.

### Getting into console

Example for Rinkeby Network: `yarn hardhat console --network rinkeby`

```txt
yarn run v1.22.18
Welcome to Node.js v16.15.1.
Type ".help" for more information.
> await ethers.provider.getBlockNumber();
10965729
> .exit
✨  Done in 147.85s.
```

## Hardhat tests

Previous hacks and how they got hacked: <https://rekt.news/leaderboard/>

Implement tests coverage to avoid it. Hardhat used **Mocha** framework to implement tests.
