const getChainTarget = (chainId) => {
    switch (chainId) {
        case 1:
            return {
                id: '0x1',
                nativeCurrency: {
                    name: 'ETH',
                    symbol: 'ETH',
                    decimals: 18
                } 
            };
  
        case 4:
            return {
                id: '0x4',
                nativeCurrency: {
                    name: 'ETH',
                    symbol: 'ETH',
                    decimals: 18
                }
            };
  
        case 137:
            return {
                id: '0x89',
                nativeCurrency: {
                    name: 'MATIC',
                    symbol: 'MATIC',
                    decimals: 18
                }
            };
  
        case 80001:
            return {
                id: '0x13881',
                nativeCurrency: {
                    name: 'MATIC',
                    symbol: 'MATIC',
                    decimals: 18
                }
            };
    }
}

export const switchFromChain = (originChain) => {
    const targetChainId = getChainTarget(originChain);

    return new Promise(async(resolve, reject) => {
      try {
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: targetChainId.id }]
        });

        resolve(true);
      } catch (e) {
        if (e.code === 4902) {
          try {
            await window.ethereum.request({
              method: 'wallet_addEthereumChain',
              params: [{
                chainId: targetChainId.id,
                rpcUrls: [originChain.rpcUrl],
                chainName: originChain.name,
                nativeCurrency: targetChainId.nativeCurrency,
                blockExplorerUrls: [originChain.scanLink]
              }]
            });
          } catch (addError) {
            // handle "add" error
          }
        }
        reject(e);
      }
    });
}
