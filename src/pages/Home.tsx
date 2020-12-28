import React from 'react';
import Trades from '../widgets/Trades';
import Plugins from '../widgets/Plugins';
import Pages from '../widgets/Pages';

const Home = () => {
  return (
    <>
      <Trades />
      <Plugins />
      <Pages />
    </>
  );
}

export default Home;
