import React from 'react';
import ReduxProvider from './providers/ReduxProvider';
import ThemeProvider from './providers/ThemeProvider';
import Header from './Header';
import Footer from './Footer';
import { AppContainer, ContentContainer } from './styles';
import GlobalFonts from '../fonts/fonts';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import Home from '../pages/Home';
import Sub from '../pages/Sub';

function App() {
  return (
    <Router>
      <AppContainer>
        <GlobalFonts />
        <Header />
        <ContentContainer>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/sub/:id" component={Sub} />
            <Route render={() => <Redirect to={{pathname: "/"}} />} />
          </Switch>
        </ContentContainer>
        <Footer />
      </AppContainer>
    </Router>
  );
}

export default ReduxProvider(ThemeProvider(App));
