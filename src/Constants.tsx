import { ethers } from 'ethers';
import { ToastOptions } from 'react-toastify';

const RECIPIENT1 = ethers.utils.hexZeroPad("0x9785bebdC6F928Bc607175ac6D2d6Ac939C49c62", 20);
const RECIPIENT2 = ethers.utils.hexZeroPad("0xfD7A0F7F50f070B3159Cf4940d2898Df8F597A61", 20);

const EVENT_DonationDisabled = ethers.utils.id("DonationDisabled(address,uint256)");
const EVENT_DonationEnabled  = ethers.utils.id("DonationEnabled(address,uint256)");
const EVENT_Donated          = ethers.utils.id("DonatedInfo(address,uint256,bool)");

const WALLET_ADDR = "0x0080614a1B5821340C73c5A0455e55CF20b1a164";
const SWAP_ROUTER_ADDR = "0xEc9537B6D66c14E872365AB0EAE50dF7b254D4Fc";

// Update the following 4 constants on a new deployment
const TOKEN0_ADDR = "0x902A6af8aF3df1D3Ef148053380917b4945Ef07c";
const TOKEN1_ADDR = "0xb9f6BF737bc422115563b8a31CdB08d734ace3F3";

const AfterSwapDonationHook_ADDR = "0x49D1F938F751264727cC0022e995508AdF8f0040";
const SWAPHELPER_ADDR = "0x7F99879D6237358b383e7899899FF65F79e709f5";

const TOAST_SETTINGS: ToastOptions = {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
};

export {
  RECIPIENT1,
  RECIPIENT2,
  EVENT_DonationDisabled,
  EVENT_DonationEnabled,
  EVENT_Donated,
  WALLET_ADDR,
  AfterSwapDonationHook_ADDR,
  SWAP_ROUTER_ADDR,
  SWAPHELPER_ADDR,
  TOKEN0_ADDR,
  TOKEN1_ADDR,
  TOAST_SETTINGS
}