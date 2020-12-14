export const imagesPath = '../public/images/'

export const pageHome = {
  title: 'Home | AirSwap',
  description: '',
  link: '/'
}

export const headerLinkData = {
  title: 'Join and shape the future.',
  items: [
    {
      title: 'More',
      link: 'https://explorer.airswap.io/'
    },
    {
      title: 'Trade',
      link: 'https://instant.airswap.io/'
    },
    {
      title: 'Vote',
      link: 'https://vote.airswap.io/'
    },
    {
      title: 'Build',
      link: 'https://docs.airswap.io/'
    },
    {
      title: 'Chat',
      link: 'https://chat.airswap.io/'
    }
  ]
}

export const listPageData = {
  title: 'Join and shape the future.',
  items: [
    {
      title: 'Learn about the technology',
      description: 'Stay in control of your keys and your coins. No sign-ups and no deposits, only peer-to-peer trading directly from your favorite digital wallet. Plug in and go.',
      link: '/technology'
    },
    {
      title: 'Build the future of trading',
      description: 'Thinkers, designers, developers, and traders all participate in the AirSwap Improvement Proposal (AIP) process by authoring, discussing, and building proposals.',
      link: '/process'
    },
    {
      title: 'Use your tokens to stake and vote',
      description: 'The AirSwap token (AST) has two main utilities: to give liquidity providers the ability to announce that they’re online, and to give community members a voice in governance.',
      link: '/token'
    }
  ]
}

export const pageAboutTechnology = {
  title: 'Learn about the technology | AirSwap',
  description: 'Stay in control of your keys and your coins. No sign-ups and no deposits, only peer-to-peer trading directly from your favorite digital wallet. Plug in and go.',
  link: '/technology',
  content: [
    <div>
      [architecture_diagram[
    </div>,
    <div>
      <p>
        AirSwap works with a combination of web protocols and smart contracts.
        There are two kinds of liquidity providers in the system, those that run
        their own HTTP servers to provide liquidity and those that manage
        onchain delegates that make trades on their behalf.
      </p>
      <p>
        Each swap is between at least two parties, a signer and a sender. The
        signer is the party that creates and cryptographically signs an order,
        and sender is the party that sends the order to the Ethereum blockchain
        for settlement. Learn more at https://docs.airswap.io/.
      </p>
    </div>
  ]
}

export const pageDevelopment = {
  title: 'Build the future of trading | AirSwap',
  description: 'Thinkers, designers, developers, and traders all participate in the AirSwap Improvement Proposal (AIP) process by authoring, discussing, and building proposals.',
  link: '/process',
  content: [
    <div>
      [process_diagram[
    </div>,
    <div>
      <p>
        To foster innovation and open product development, the AirSwap network
        and community are driven by a proposal system following the style of
        existing open source projects and those throughout the blockchain
        development ecosystem.
      </p>
      <p>
        Proposals consist of new protocols, smart contracts, maker software,
        network tooling, applications, and tokenomics. Collaborate with the
        token and developer communities on the future of the AirSwap network.
        View active AIPs at https://github.com/airswap/AIPs/issues
      </p>
    </div>
  ]
}

export const pageTokenAndGov = {
  title: 'Use your tokens to stake and vote | AirSwap',
  description: 'The AirSwap token (AST) has two main utilities: to give liquidity providers the ability to announce that they’re online, and to give community members a voice in governance.',
  link: '/token',
  content: [
    <div>
      [stake_and_vote_diagram[
    </div>,
    <div>
      <p>
        Because AirSwap is a peer-to-peer network, finding a counterparty is the
        first step in any trade. The underlying AirSwap protocols include the
        Indexer, which is like a search engine for peers. To be added to this
        search engine, liquidity providers stake their AST.
      </p>
      <p>
        AirSwap tokens are also used by community members to vote on AirSwap
        Improvement Proposals (AIP) to determine which proposals should be
        implemented. Browse active AIPs and participate in votes at
        https://vote.airswap.io/.
      </p>
    </div>
  ]
}

export const wayToTradeData = {
  title: 'The safest way to trade.',
  items: [
    {
      title: 'Non-custodial',
      description: 'Stay in control of your keys and your coins. No sign-ups and no deposits, only peer-to-peer trading directly from your favorite digital wallet. Plug in and go.'
    },
    {
      title: 'Guaranteed price',
      description: 'The price you see is the price you get. Each trade is cryptographically signed and guaranteed to fill at the specified price without any slippage during execution.'
    },
    {
      title: 'Atomic swaps',
      description: 'Both sides of a trade must successfully transfer tokens in a single transaction. If one side fails, the entire transaction reverts and no tokens move.'
    }
  ]
}

export const pluginData = {
  title: 'Plug in your wallet and go.',
  items: [
    {
      title: 'AirSwap Instant',
      description: 'Swap instantly with automated liquidity providers.',
      link: 'https://instant.airswap.io/',
      thumbnail: imagesPath + 'airswap_instant.png'
    },
    {
      title: 'AirSwap OTC',
      description: 'Create and share custom swaps with other traders on the web.',
      link: 'https://trader.airswap.io/',
      thumbnail: imagesPath + 'airswap_otc.png'
    },
    {
      title: 'MetaMask',
      description: 'Swap directly from the MetaMask browser extension.',
      link: 'https://www.metamask.io/',
      thumbnail: imagesPath + 'metmask.png'
    }
  ]
}



