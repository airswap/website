import { TRADER_AFFILIATE_ADDRESS } from 'airswap.js/src/constants';

// Swap Sources
export const ONEINCH_EXCHANGE_ADDRESS = '0x11111254369792b2ca5d084ab5eea397ca8fa48b';
export const DEX_AG_ADDRESS = '0xa540fb50288cc31639305b1675c70763c334953b';
export const TOTLE_ADDRESS = '0x91f3935ed7a4ee8d15023c5df26895b26ae98015';

// Airswap URL
export const AIRSWAP_EXPLORE_URL = 'https://explorer.airswap.io/';
export const AIRSWAP_TRADE_URL = 'https://instant.airswap.io/';
export const AIRSWAP_VOTE_URL = 'https://vote.airswap.io/';
export const AIRSWAP_BUILD_URL = 'https://docs.airswap.io/';
export const AIRSWAP_CHAT_URL = 'https://chat.airswap.io/';

export const SwapSourceMap = {
  [ONEINCH_EXCHANGE_ADDRESS]: '1Inch',
  [DEX_AG_ADDRESS]: 'Dex.ag',
  [TOTLE_ADDRESS]: 'Totle',
  [TRADER_AFFILIATE_ADDRESS]: 'AirSwap OTC',
};

export const listPageData = {
  title: 'Join and shape the future.',
  items: [
    {
      title: 'Learn about the technology',
      description: 'Stay in control of your keys and your coins. No sign-ups and no deposits, only peer-to-peer trading directly from your favorite digital wallet. Plug in and go.',
      link: '/technology',
    },
    {
      title: 'Build the future of trading',
      description: 'Thinkers, designers, developers, and traders all participate in the AirSwap Improvement Proposal (AIP) process by authoring, discussing, and building proposals.',
      link: '/process',
    },
    {
      title: 'Use your tokens to stake and vote',
      description: 'The AirSwap token (AST) has two main utilities: to give liquidity providers the ability to announce that they’re online, and to give community members a voice in governance.',
      link: '/token',
    },
  ],
};

export const pageAboutTechnology = {
  title: 'Learn about the technology | AirSwap',
  description: 'Stay in control of your keys and your coins. No sign-ups and no deposits, only peer-to-peer trading directly from your favorite digital wallet. Plug in and go.',
  link: '/technology',
  content: '<p>AirSwap works with a combination of web protocols and smart contracts. There are two kinds of liquidity providers in the system, those that run their own HTTP servers to provide liquidity and those that manage onchain delegates that make trades on their behalf.</p><p>Each swap is between at least two parties, a signer and a sender. The signer is the party that creates and cryptographically signs an order, and sender is the party that sends the order to the Ethereum blockchain for settlement. Learn more at https://docs.airswap.io/.</p>',
};

export const pageDevelopment = {
  title: 'Build the future of trading | AirSwap',
  description: 'Thinkers, designers, developers, and traders all participate in the AirSwap Improvement Proposal (AIP) process by authoring, discussing, and building proposals.',
  link: '/process',
  content: '<p>To foster innovation and open product development, the AirSwap network and community are driven by a proposal system following the style of existing open source projects and those throughout the blockchain development ecosystem. </p><p>Proposals consist of new protocols, smart contracts, maker software, network tooling, applications, and tokenomics. Collaborate with the token and developer communities on the future of the AirSwap network. View active AIPs at https://github.com/airswap/AIPs/issues</p>',
};

export const pageTokenAndGov = {
  title: 'Use your tokens to stake and vote | AirSwap',
  description: 'The AirSwap token (AST) has two main utilities: to give liquidity providers the ability to announce that they’re online, and to give community members a voice in governance.',
  link: '/token',
  content: '<p>Because AirSwap is a peer-to-peer network, finding a counterparty is the first step in any trade. The underlying AirSwap protocols include the Indexer, which is like a search engine for peers. To be added to this search engine, liquidity providers stake their AST. </p> <p>AirSwap tokens are also used by community members to vote on AirSwap Improvement Proposals (AIP) to determine which proposals should be implemented. Browse active AIPs and participate in votes at https://vote.airswap.io/. </p>',
};

export const wayToTradeData = {
  title: 'The safest way to trade.',
  items: [
    {
      title: 'Non-custodial',
      description: 'Stay in control of your keys and your coins. No sign-ups and no deposits, only peer-to-peer trading directly from your favorite digital wallet. Plug in and go.',
    },
    {
      title: 'Guaranteed price',
      description: 'The price you see is the price you get. Each trade is cryptographically signed and guaranteed to fill at the specified price without any slippage during execution.',
    },
    {
      title: 'Atomic swaps',
      description: 'Both sides of a trade must successfully transfer tokens in a single transaction. If one side fails, the entire transaction reverts and no tokens move.',
    },
  ],
};


export const pluginData = {
  title: 'Plug in your wallet and go.',
  items: [
    {
      title: 'AirSwap Instant',
      description: 'Swap instantly with automated liquidity providers.',
      link: 'https://instant.airswap.io/',
      thumbnail: '/static/airswap_instant.png',
    },
    {
      title: 'AirSwap OTC',
      description: 'Create and share custom swaps with other traders on the web.',
      link: 'https://trader.airswap.io/',
      thumbnail: '/static/airswap_otc.png',
    },
    {
      title: 'MetaMask',
      description: 'Swap directly from the MetaMask browser extension.',
      link: 'https://www.metamask.io/',
      thumbnail: '/static/metmask.png',
    },
  ],
};
