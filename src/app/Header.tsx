import React, { Suspense } from 'react';
const Volume = React.lazy(() => import('../widgets/Volume'));
import { AIRSWAP_BUILD_URL, AIRSWAP_CHAT_URL, AIRSWAP_EXPLORE_URL, AIRSWAP_VOTE_URL } from '../constants';
import { ReactComponent as AirSwapLogo } from '../static/airswap-logo.svg';
import { AirSwapLogoContainer, HeaderContainer, MenuContainer, HeaderSide, Container, MenuButtonOuter } from './styles';
import Button from '../components/Button';
import { VolumeContainer, VolumeTitle } from '../widgets/Volume/styles';
import Link from '../components/Link';
interface ButtonProps {
  label: string;
  url: string;
}

function MenuButton(props: ButtonProps) {
  return (
    <MenuButtonOuter>
      <Button url={props.url}>{props.label}</Button>
    </MenuButtonOuter>
  );
}

export default function Header() {
  const [isLoaded, setLoaded] = React.useState(false);
  React.useEffect(() => {
    setLoaded(true);
  }, []);
  return (
    <Container>
      <HeaderContainer>
        <AirSwapLogoContainer>
          <Link to="/">
            <AirSwapLogo height={96} />
          </Link>
        </AirSwapLogoContainer>
        <HeaderSide>
          {isLoaded && (
            <Suspense
              fallback={
                <VolumeContainer>
                  <VolumeTitle>VOLUME</VolumeTitle>
                </VolumeContainer>
              }
            >
              <Volume />
            </Suspense>
          )}
          <MenuContainer>
            <MenuButton label="EXPLORE" url={AIRSWAP_EXPLORE_URL} />
            <MenuButton label="BUILD" url={AIRSWAP_BUILD_URL} />
            <MenuButton label="STAKE" url={AIRSWAP_VOTE_URL} />
            <MenuButton label="CHAT" url={AIRSWAP_CHAT_URL} />
          </MenuContainer>
        </HeaderSide>
      </HeaderContainer>
    </Container>
  );
}
