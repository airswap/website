import React from 'react';
import Trades from '../widgets/Trades';
import Plugins from '../widgets/Plugins';
import Pages from '../widgets/Pages';

const Home = () => {
  return (
    <>
      <h1 style={{display: 'none'}}>AirSwap</h1>
      <Trades />
      <Plugins />
      <Pages />
    </>
  );
}

export default Home;
