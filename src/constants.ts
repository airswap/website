import { TRADER_AFFILIATE_ADDRESS } from 'airswap.js/src/constants';

// Swap Sources
export const ONEINCH_EXCHANGE_ADDRESS = '0x11111254369792b2ca5d084ab5eea397ca8fa48b';
export const DEX_AG_ADDRESS = '0xa540fb50288cc31639305b1675c70763c334953b';
export const TOTLE_ADDRESS = '0x91f3935ed7a4ee8d15023c5df26895b26ae98015';

// AirSwap URL
export const AIRSWAP_EXPLORE_URL = 'https://explorer.airswap.io/';
export const AIRSWAP_TRADE_URL = 'https://instant.airswap.io/';
export const AIRSWAP_VOTE_URL = 'https://activate.codefi.network/staking/airswap/governance';
export const AIRSWAP_BUILD_URL = 'https://docs.airswap.io/';
export const AIRSWAP_CHAT_URL = 'https://chat.airswap.io/';
export const AIRSWAP_FAQ_URL = 'https://support.airswap.io/en/collections/1334342-faq';
export const AIRSWAP_PRIVACY_URL = 'https://www.airswap.io/airswap-privacy-policy.pdf';
export const AIRSWAP_TERMS_URL = 'https://www.airswap.io/airswap-terms-of-use.pdf';
export const AIRSWAP_DOCS_URL = 'https://docs.airswap.io';

export const AIRSWAP_TWITTER = 'https://twitter.com/airswap';
export const AIRSWAP_DISCORD = 'https://chat.airswap.io';
export const AIRSWAP_TELEGRAM = 'https://t.me/airswap';
export const AIRSWAP_REDDIT = 'https://www.reddit.com/r/AirSwap/';

export const SwapSourceMap = {
  [ONEINCH_EXCHANGE_ADDRESS]: '1Inch',
  [DEX_AG_ADDRESS]: 'Dex.ag',
  [TOTLE_ADDRESS]: 'Totle',
  [TRADER_AFFILIATE_ADDRESS]: 'AirSwap OTC',
};

export const pageAboutTechnology = {
  link: `/technology`,
  title: 'Learn about the technology',
  description:
    'AirSwap is a peer-to-peer network. A simple combination of web protocols and smart contracts powers its RFQ (request-for-quote) style protocol.',
  content:
    '<p>There are two kinds of liquidity providers on AirSwap: those running their own HTTP servers to provide liquidity and those managing onchain delegates that swap on their behalf.</p><p>Each swap is between two parties, a signer and a sender. The signer is the party that creates and cryptographically signs an order and sender is the party that sends the order to the Ethereum blockchain for settlement. Learn more at <a href="https://docs.airswap.io/" target="_blank">https://docs.airswap.io/</a>.</p>',
};

export const pageDevelopment = {
  link: `/process`,
  title: 'Build the future of trading',
  description:
    'Thinkers, designers, and developers can all contribute and earn. Staking the AirSwap token (AST) is the first step in joining the process.',
  content:
    '<p>AirSwap is driven by a development system called AirSwap Improvement Proposals (AIP).</p><p>Proposals are for new protocols, smart contracts, maker software, network tooling, applications, tokenomics, and more. Collaborate with the token and developer communities and earn for your contributions. View and learn more about active AIPs at <a href="https://github.com/airswap/AIPs/issues" target="_blank">https://github.com/airswap/AIPs/issues</a></p>',
};

export const pageLiquidity = {
  link: `/liquidity`,
  title: 'Start quoting for MetaMask Swaps',
  description:
    'Trading firms have a huge opportunity in front of them: MetaMask Swaps. By standing up an AirSwap server you can start quoting out of the box.',
  content:
    '<p>Over $15M daily volume and growing, MetaMask Swaps is a runaway success. Request-for-quote (RFQ) is the most efficient design for decentralized trading, and without slippage or front-running, a clear winner for everyone on both sides of a trade.</p> <p>Automatically serve prices and settle with an atomic swap. In just a few steps you’re up and running. Learn more at <a href="https://docs.airswap.io/liquidity-providers/run-a-server" target="_blank">https://docs.airswap.io/liquidity-providers/run-a-server</a>.</p>',
};

export const listPageData = {
  title: 'Join and shape the future.',
  items: [
    pageAboutTechnology,
    pageDevelopment,
    pageLiquidity,
  ],
};

export const wayToTradeData = {
  title: 'Powering peer-to-peer trading.',
  items: [
    {
      title: 'Decentralized',
      description:
        'Maintain custody of your keys and your coins. No sign-ups and no deposits, only peer-to-peer trading directly from your favorite digital wallet. Plug in and go.',
    },
    {
      title: 'Guaranteed price',
      description:
        'The price you see is the price you get. Each swap is cryptographically signed and guaranteed to fill at the specified price without any slippage during execution.',
    },
    {
      title: 'Atomic swaps',
      description:
        'Both sides of a swap must successfully transfer tokens in a single transaction. If one side fails, the entire transaction reverts and no tokens move.',
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
      thumbnail: `${process.env.PUBLIC_URL}/images/airswap_instant.png`,
    },
    {
      title: 'AirSwap OTC',
      description: 'Create and share custom swaps with other traders on the web.',
      link: 'https://trader.airswap.io/',
      thumbnail: `${process.env.PUBLIC_URL}/images/airswap_otc.png`,
    },
    {
      title: 'MetaMask',
      description: 'Swap directly from the MetaMask browser extension.',
      link: 'https://www.metamask.io/',
      thumbnail: `${process.env.PUBLIC_URL}/images/metmask.png`,
    },
  ],
};

export const subMenus = [
  {
    label: 'About the technology',
    to: 'technology',
  },
  {
    label: 'Development process',
    to: 'process',
  },
  {
    label: 'Providing liquidity',
    to: 'liquidity',
  },
];
