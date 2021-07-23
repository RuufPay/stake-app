export const chainsTypeId = {
    NONE: 0,
    ETH: '0x1',
    ROPSTEN: '0x3',
    KOVAN: '0x2a',
    RINKEBY: '0x4',
    GOERLI: '0x5',
    BSC: '0x38',
    BSCTESTNET: '0x61',
    POLYGON: '0x89',
    MUMBAI: '0x13881',
    XDAI: '0x64',
    GANACHE: '0x539'
  };
  
  export const chainsNetworkName = {
    [chainsTypeId.NONE]: 'None',
    [chainsTypeId.ETH]: 'Ethereum',
    [chainsTypeId.ROPSTEN]: 'Ropsten',
    [chainsTypeId.KOVAN]: 'Kovan',
    [chainsTypeId.RINKEBY]: 'Rinkeby',
    [chainsTypeId.GOERLI]: 'Goerli',
    [chainsTypeId.BSC]: 'Binance',
    [chainsTypeId.BSCTESTNET]: 'Binance Testnet',
    [chainsTypeId.POLYGON]: 'Polygon (Matic)',
    [chainsTypeId.MUMBAI]: 'Mumbai',
    [chainsTypeId.XDAI]: 'xDai',
    [chainsTypeId.GANACHE]: 'Ganache'
  };