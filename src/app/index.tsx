import React from 'react';
import ReduxProvider from './providers/ReduxProvider';
import ThemeProvider from './providers/ThemeProvider';
import Header from './Header';
import Footer from './Footer';
import { AppContainer, ContentContainer } from './styles';
import GlobalFonts from '../fonts/fonts';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
const Home = React.lazy(() => import('../pages/Home'));
const Sub = React.lazy(() => import('../pages/Sub'));

const App = () => {
  return (
    <Router>
      <AppContainer>
        <GlobalFonts />
        <Header />
        <ContentContainer>
          <Switch>
            <React.Suspense fallback={''}>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/:id" component={Sub} />
            </React.Suspense>
          </Switch>
        </ContentContainer>
        <Footer />
      </AppContainer>
    </Router>
  );
};

export default ReduxProvider(ThemeProvider(App));
