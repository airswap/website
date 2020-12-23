import React from 'react';

import ReduxProvider from './providers/ReduxProvider';
import ThemeProvider from './providers/ThemeProvider';
import Header from './Header';
import Footer from './Footer';
import { AppContainer, ContentContainer } from './styles';
import Trades from '../widgets/Trades';
import Plugins from '../widgets/Plugins';
import Pages from '../widgets/Pages';

function App() {
  return (
    <AppContainer>
      <Header/>
      <ContentContainer>
        <Trades/>
        <Plugins/>
        <Pages/>
      </ContentContainer>
      <Footer/>
    </AppContainer>
  );
}

export default ReduxProvider(ThemeProvider(App));
