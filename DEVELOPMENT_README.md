
     Run TypeChain to import contracts and target ethers v5
     & 'K:\Development\Ethereum\UniswapHook Donations UI\node_modules\.bin\typechain.ps1' --target ethers-v5 --out-dir src/contracts './src/json/*.json'
     
     const donationHookContract = AfterSwapDonationHook__factory.connect(AfterSwapDonationHook_Addr, signer);

     // Test read
     let donationEnabledProperty = await donationHookContract['donationEnabled()'];
     let donationEnabled = await donationEnabledProperty();
     
     let donationPercentProperty = await donationHookContract['donationPercent()'];
     const donationPercent = await donationPercentProperty();
     
     let donationRecipientProperty = await donationHookContract['donationRecipient()'];
     const donationRecipient = await donationRecipientProperty();
     
     let contractOwner = await donationHookContract.owner();
