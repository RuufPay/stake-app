import { chainsTypeId } from './chains';

export default {
  [chainsTypeId.NONE]: {
    homeCoin: "",
    stakeFarm: ""
  },
  [chainsTypeId.ETH]: {
    homeCoin: "0xAF585c15daB8C363087c572758AC75E82C467579",
    stakeFarm: "0x75a401D888A2b827BAEEC26dc3C60e064288A6C2"
  },
  [chainsTypeId.POLYGON]: {
    homeCoin: "",
    stakeFarm: ""
  },
  [chainsTypeId.XDAI]: {
    homeCoin: "",
    stakeFarm: ""
  },
  [chainsTypeId.BSC]: {
    homeCoin: "",
    stakeFarm: ""
  },
  [chainsTypeId.RINKEBY]: {
    homeCoin: "0x3460fcA73f770932eA9FF80c2D3AfA2A6ab4a18e",
    stakeFarm: "0x425D8F1349fdce8D83714E09352105e2feDf1b7C"
  },
  [chainsTypeId.ROPSTEN]: {
    homeCoin: "",
    stakeFarm: ""
  },
  [chainsTypeId.GOERLI]: {
    homeCoin: "",
    stakeFarm: ""
  },
  [chainsTypeId.KOVAN]: {
    homeCoin: "",
    stakeFarm: ""
  },
  [chainsTypeId.BSCTESTNET]: {
    homeCoin: "",
    stakeFarm: ""
  },
  [chainsTypeId.MUMBAI]: {
    homeCoin: "",
    stakeFarm: ""
  },
  [chainsTypeId.GANACHE]: {
    homeCoin: "0x92c91489D1b8799FC297d8aF837BC6be50fb8652",
    stakeFarm: "0xA3f316aE0825A203392FD466144057c4De5c05DB"
  }
};
