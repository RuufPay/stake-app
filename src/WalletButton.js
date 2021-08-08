import React from "react";

export function WalletButton({ provider, loadWeb3Modal, logoutOfWeb3Modal }) {
  return (
    <a href='#' class="btn-1 shadow1 style3 bgscheme"
      onClick={() => {
        if (!provider) {
          loadWeb3Modal();
        } else {
          logoutOfWeb3Modal();
        }
      }}
    >
      {!provider ? "Connect Wallet" : "Disconnect Wallet"}
    </a>
  );
}
