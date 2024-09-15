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
const TOKEN0_ADDR = "0x1c4261eE5C51DA0337998999c7fE20bACd364757";
const TOKEN1_ADDR = "0x27D213148A317547De7fE16C978FdD88d081BC46";

const AfterSwapDonationHook_ADDR = "0xEDf832FA4043EFd463664CEF08d291cD1E140040";
const SWAPHELPER_ADDR = "0x7F0f4EF7fC582843D1af6BD55B670C9e2486A099";

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