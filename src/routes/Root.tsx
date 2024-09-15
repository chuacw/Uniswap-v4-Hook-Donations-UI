// This is the home page

import { useContext, useState } from "react";

export default function Root() {
  

    return (
      <>

        <div id="sidebar">
          <div>
              <div
                id="search-spinner"
                aria-hidden
                hidden={true}
              />
              <div
                className="sr-only"
                aria-live="polite"
              ></div>
          </div>
          <nav>
            <ul>
              <li>
                <a href={`/Swap`}>Swap</a>
              </li>
              <li>
                <a href={`/DonationSettings`}>Donation Settings</a>
              </li>
            </ul>
          </nav>
        </div>
        <div id="detail"></div>

      </>
    );
  }
  
  