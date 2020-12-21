import React from 'react';

import ReduxProvider from './providers/ReduxProvider';
import Header from './Header';
import { AppContainer, ContentContainer } from './styles';

function App() {
  return (
    <AppContainer>
        <Header />
          <ContentContainer>
          </ContentContainer>
    </AppContainer>
    );
}

export default ReduxProvider(App);
