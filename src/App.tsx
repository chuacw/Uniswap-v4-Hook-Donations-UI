import React, { useState } from 'react';
import './App.css';
import { ethers } from 'ethers';
import './App.css';
// import MockERC20 from './json/MockERC20.json';
// import AfterSwapDonationHook from './json/AfterSwapDonationHook.json';
import {AfterSwapDonationHook__factory, MockERC20__factory} from './contracts/index';
import { useSyncProviders } from './useSyncProviders';

const App: React.FC = () => {

  const providers = useSyncProviders()

  const WETH_Addr = "0xe32E1455a9bffC64A6A10fdf399A246754506291";
  const USDT_Addr = "0x7662952eEDD2eCE8CcCCfDBc2660cF4828ca41d7";
  const AfterSwapDonationHook_Addr = "0xB8735361252400B2109e80a854173B33Ce210040";
  const Wallet_Addr = "0x0080614a1B5821340C73c5A0455e55CF20b1a164";

  const RECIPIENT1 = ethers.utils.hexZeroPad("0x9785bebdC6F928Bc607175ac6D2d6Ac939C49c62", 20);
  const RECIPIENT2 = ethers.utils.hexZeroPad("0xfD7A0F7F50f070B3159Cf4940d2898Df8F597A61", 20)

  const [account, setAccountAddr] = useState<string>("");
  const [ethAddress, setAccount] = useState<string>(Wallet_Addr);
  const [donationAddress, setDonationAddress] = useState<string>(RECIPIENT1);
  const [approvalAmount, setApprovalAmount] = useState<string>("115792089237316195423570985008687907853269984665640564039457584007913129639935");
  const [selectedAddress, setSelectedAddress] = useState<string>('0x123...abc');

  const [btnEnableDonationDisabled, set_btnEnableDonationDisabled] = useState(true)
  const [btnApproveDisabled, set_btnApproveDisabled] = useState(true)
  const [btnDisapproveDisabled, set_btnDisapproveDisabled] = useState(true)
  const [thisProvider, setProvider] = useState<EIP6963ProviderDetail>();

  // const { sdk, connected, connecting, provider, chainId, account } = useSDK();

  // const connect = async () => {
  //   try {
  //     // const accounts = await sdk?.connect();
  //     // setAccount(accounts?.[0]);
  //   } catch (err) {
  //     console.warn("failed to connect..", err);
  //   }
  // };

  const connectWallet = async() => {
    if (providers.length > 0) {
      await handleConnect(providers[0]);

    }
  }

  const handleConnect = async (providerWithInfo: EIP6963ProviderDetail) => {
    try {
      setProvider(providerWithInfo);
      console.log(thisProvider);
      const accounts = (await providerWithInfo.provider.request({
        method: "eth_requestAccounts",
      })) as string[]
      if (accounts.length>0) {
        setAccountAddr(accounts[0]);
      }
      const disabledButtons = accounts.length == 0;
      set_btnEnableDonationDisabled(disabledButtons);
      set_btnApproveDisabled(disabledButtons);
      set_btnDisapproveDisabled(disabledButtons);
    console.log(accounts);
    } catch (error) {
      console.error(error)
    }
  }

  const handleDisapprove = async() => {
  }

  const enableDonation = async() => {
    if (!ethAddress || !donationAddress) {
      alert('Please enter all details');
      return;
    }

    // let browserProvider = new BrowserProvider(thisProvider!); // ethers v6
    // let signer = await browserProvider.getSigner();
    // const provider = ethers.getDefaultProvider("sepolia");
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    try { 
      // const Token0Contract = new ethers.Contract(WETH_Addr, MockERC20.abi, signer)
      // const Token0Balance = await Token0Contract.balanceOf(Wallet_Addr);
      // const Token1Contract = new ethers.Contract(USDT_Addr, MockERC20.abi, signer)
      // const Token1Balance = await Token1Contract.balanceOf(Wallet_Addr);
      const Token0Contract = MockERC20__factory.connect(WETH_Addr, signer);
      const Token0Balance = await Token0Contract.balanceOf(Wallet_Addr);
      const Token1Contract = MockERC20__factory.connect(USDT_Addr, signer);
      const Token1Balance = await Token1Contract.balanceOf(Wallet_Addr);
      
      console.log("TK0 Balance: ", ethers.utils.formatUnits(Token0Balance));
      console.log("TK1 Balance: ", ethers.utils.formatUnits(Token1Balance));

      // const donationHookContract = new ethers.Contract(AfterSwapDonationHook_Addr, AfterSwapDonationHook.abi, signer)
      const donationHookContract = AfterSwapDonationHook__factory.connect(AfterSwapDonationHook_Addr, signer);

      // Test read
      let donationEnabledProperty = await donationHookContract['donationEnabled()'];
      let donationEnabled = await donationEnabledProperty();
      let donationPercentProperty = await donationHookContract['donationPercent()'];
      const donationPercent = await donationPercentProperty();
      let donationRecipientProperty = await donationHookContract['donationRecipient()'];
      const donationRecipient = await donationRecipientProperty();
      let contractOwner = await donationHookContract.owner();
    
      console.log(`Contract owner: ${contractOwner}`);
      console.log(donationEnabled);
      console.log(donationPercent);
      console.log(donationRecipient);
      let address = ethers.utils.hexZeroPad("0x02", 20);
      const receipt = await donationHookContract.enableDonation(address, 10);
      
      console.log("Transaction Hash: " + receipt.hash);
    } catch (error) {
      console.error(error)
    }

  }

  const handleApprove = async () => {
    try {
      if (!ethAddress || !donationAddress) {
        alert('Please enter all details');
        return;
      }

      // Connect to the Ethereum provider (MetaMask in this case)
      // const provider = new ethers.BrowserProvider(window.ethereum);
      // await provider.send('eth_requestAccounts', []); // Request access to the user's MetaMask account
      // const signer = await provider.getSigner();

      // Create contract instance
      // const erc20Contract = new ethers.Contract(WETH_Addr, MockERC20.abi, signer);

      // Call approve function
      // const tx = await erc20Contract.approve(ethAddress, `${ethers.parseUnits(approvalAmount, 18)}`);
      // console.log('Transaction sent:', tx.hash);

      // await tx.wait(); // Wait for the transaction to be confirmed
      // console.log('Transaction confirmed');
      // alert('Approval successful!');
    } catch (error) {
      console.error('Error during approval:', error);
      alert('Error during approval');
    }
  };

  return (
    // <div className="container">
    //   <div className="content">
    //     <h1>ERC-20 Approve</h1>
    //    {/* Dropdown combo for Ethereum addresses */}
    //    <select 
    //       value={selectedAddress} 
    //       onChange={(e) => setSelectedAddress(e.target.value)}
    //     >
    //       <option value={WETH_Addr}>WETH</option>
    //       <option value={USDT_Addr}>USDT</option>
    //     </select>
    //     &nbsp;&nbsp;
    //     <input
    //       type="text"
    //       placeholder={AfterSwapDonationHook_Addr}
    //       value={contractAddress}
    //       onChange={(e) => setContractAddress(e.target.value)}
    //       size={42}  // Dynamically set size based on input length
    //     />
    //     &nbsp;&nbsp;
    //     <input
    //       type="text"
    //       placeholder="Amount to approve"
    //       value={approvalAmount}
    //       onChange={(e) => setApprovalAmount(e.target.value)}
    //     />
    //     <br/>
    //     <button onClick={enableDonation}>Enable donation</button>
    //     &nbsp;&nbsp;
    //     <button onClick={handleApprove}>Approve</button>
    //     &nbsp;&nbsp;
    //     <button onClick={handleDisapprove}>Disapprove</button>
    //   </div>
    // </div>

    <div className="App">
      <h2>Wallets Detected:</h2>
      <div className="providers">
        {providers.length > 0 ? (
          
          // providers?.map((provider: EIP6963ProviderDetail) => (
          //   <button
          //     key={provider.info.uuid}
          //     onClick={() => handleConnect(provider)}
          //   >
          //     <img src={provider.info.icon} alt={provider.info.name} />
          //     <div>{provider.info.name}</div>
          //   </button>
          // ))
          <>

           <div className="container">
             <div className="content">
               <h1>ERC-20 Approve</h1>
              {/* Dropdown combo for Ethereum addresses */}
              <select 
                 value={selectedAddress} 
                 onChange={(e) => setSelectedAddress(e.target.value)}
               >
                 <option value={WETH_Addr}>WETH</option>
                 <option value={USDT_Addr}>USDT</option>
               </select>
               &nbsp;&nbsp;
               <input
                 type="text"
                 placeholder={AfterSwapDonationHook_Addr}
                 value={donationAddress}
                 onChange={(e) => setDonationAddress(e.target.value)}
                 size={42}  // Dynamically set size based on input length
               />
               &nbsp;&nbsp;
               <input
                 type="text"
                 placeholder="Amount to approve"
                 value={approvalAmount}
                 onChange={(e) => setApprovalAmount(e.target.value)}
               />
               <br/>
               <button onClick={connectWallet} >Connect to wallet</button>
               &nbsp;&nbsp;
               <button onClick={enableDonation} disabled={btnEnableDonationDisabled}>Enable donation</button>
               &nbsp;&nbsp;
               <button onClick={handleApprove} disabled={btnApproveDisabled}>Approve</button>
              &nbsp;&nbsp;
               <button onClick={handleDisapprove} disabled={btnDisapproveDisabled}>Disapprove</button>
             </div>
           </div>

          </>
        ) : (
          <div>No Announced Wallet Providers</div>
        )}
      </div>
    </div>    
  );
};

export default App
