
## Steps

1. Build the Solidity contracts using forge b.
2. Copy the generated Solidity JSON from the out folder to the src\contracts directory.
3. 
     Run TypeChain to import contracts and target ethers v5 using either PowerShell or cmd
     1. & 'K:\Development\Ethereum\UniswapHook Donations UI\node_modules\.bin\typechain.ps1' --target ethers-v5 --out-dir src/contracts './src/json/*.json'
     2. node_modules\.bin\typechain.cmd --target=ethers-v5 --out-dir src\contracts src\json\*.json
     
4. Deploy the contracts using "forge.exe script AfterSwapHookDonationDeployScript  --rpc-url $env:DEPLOY_URL --private-key $env:FOUNDRY_PRIVATE_KEY --broadcast --gas-price 10000000000000000000 -vvv --slow" in PowerShell.

5. Update the various constants in src\Constants.tsx from the output generated while deploying the contract.  

6. Run "npm run build" to build the UI.


## Various test code

How to read various values from the Solidity contract on-chain.
```
     let donationEnabledProperty = donationHookContract['donationEnabled()'];
     let donationEnabled = await donationEnabledProperty();
     
     let donationPercentProperty = donationHookContract['donationPercent()'];
     const donationPercent = await donationPercentProperty();
     
     let donationRecipientProperty = donationHookContract['donationRecipient()'];
     const donationRecipient = await donationRecipientProperty();
     
     let contractOwner = await donationHookContract.owner();
```

## References
1. https://4geeks.com/how-to/react-global-context
2. https://www.freecodecamp.org/news/how-to-use-react-router-version-6/
