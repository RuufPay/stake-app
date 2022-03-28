import { useCallback, useEffect, useState } from "react";
import { Web3Provider } from "@ethersproject/providers";
import Web3Modal from "web3modal";

const NETWORK_NAME = "mainnet";

function useWeb3Modal(config = {}) {
  const [provider, setProvider] = useState();
  const [autoLoaded, setAutoLoaded] = useState(false);
  const [chainId, setChainId] = useState(0x0);
  const [account, setAccount] = useState('');

  const {
    autoLoad = true,
    NETWORK = NETWORK_NAME,
  } = config;

  // Web3Modal also supports many other wallets.
  // You can see other options at https://github.com/Web3Modal/web3modal
  const web3Modal = new Web3Modal({
    network: NETWORK,
    cacheProvider: true
  });

  // Open wallet selection modal.
  const loadWeb3Modal = useCallback(async () => {
    try {
      const newProvider = await web3Modal.connect();
      await subscribeProvider(newProvider);
      setProvider(new Web3Provider(newProvider));
      await loadChainId();
    } catch(e) {
      //alert(`Error connecting to web3 provider: ${e}`);
    }
  }, [web3Modal]);

  const logoutOfWeb3Modal = useCallback(
    async function () {
      await web3Modal.clearCachedProvider();
      window.location.reload();
    },
    [web3Modal]
  );
  
  const loadChainId = useCallback(
    async function () {
      const chainId = await window.ethereum.request({ method: 'eth_chainId' });
      setChainId(chainId);
  });

  const subscribeProvider = useCallback((provider) => {
    if (!provider.on) {
      console.log('Error. No provider');
      return;
    }

    provider.on("close", async () => {
      console.log("METAMASK close");
    });

    provider.on("connect", async (info) => {
      console.log("METAMASK connected:", info);
      setChainId(info.chainId);
      window.location.reload();
    });

    provider.on("disconnect", async (error) => {
      console.log("METAMASK disconnected:", error);
    });

    provider.on("accountsChanged", async (accounts) => {
      console.log("METAMASK accountsChanged:", accounts);
      setAccount(accounts[0]);
    });

    provider.on("chainChanged", async (chainId) => {
      console.log("METAMASK chainChanged:", chainId);
      setChainId(chainId);
    });

    provider.on("networkChanged", async (networkId) => {
      console.log("METAMASK networkChanged:", networkId);
    });
  },[]);

  // If autoLoad is enabled and the the wallet had been loaded before, load it automatically now.
  useEffect(() => {
    if (autoLoad && !autoLoaded && web3Modal.cachedProvider) {
      loadWeb3Modal();
      setAutoLoaded(true);
    }
    }, [
      autoLoad,
      autoLoaded,
      loadWeb3Modal,
      setAutoLoaded,
      web3Modal.cachedProvider,
    ]);

    return [provider, loadWeb3Modal, logoutOfWeb3Modal, chainId, account];
  }

export default useWeb3Modal;
