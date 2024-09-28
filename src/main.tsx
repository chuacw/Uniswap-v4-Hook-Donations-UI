import { StrictMode, createContext } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { MetaMaskProvider } from "@metamask/sdk-react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./routes/Root.tsx";
import DonationSettings from './DonationSettings.tsx';

const router = createBrowserRouter([
  {
    path: "/",                      // Home page renders Root component
    element: <DonationSettings />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MetaMaskProvider
      debug={false}
      sdkOptions={{
        dappMetadata: {
          name: "Uniswap Hook Donation",
          url: window.location.href,
        },
        // infuraAPIKey: process.env.INFURA_API_KEY,
        // Other options.
      }}
    >

      <RouterProvider router={router} />

    </MetaMaskProvider>
  </StrictMode>

)
