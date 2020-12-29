import React, { Suspense } from 'react';
const Volume = React.lazy(() => import('../widgets/Volume'));
import { AIRSWAP_BUILD_URL, AIRSWAP_CHAT_URL, AIRSWAP_TRADE_URL, AIRSWAP_VOTE_URL } from '../constants';
import { ReactComponent as AirswapLogo } from '../static/airswap-logo.svg';
import { AirswapLogoContainer, HeaderContainer, MenuContainer, HeaderSide, Container, MenuButtonOuter } from './styles';
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
  return (
    <Container>
      <HeaderContainer>
        <AirswapLogoContainer>
          <Link to="/">
            <AirswapLogo height={96} />
          </Link>
        </AirswapLogoContainer>
        <HeaderSide>
          <Suspense fallback={<VolumeContainer><VolumeTitle>VOLUME</VolumeTitle></VolumeContainer>}>
            <Volume />
          </Suspense>
          <MenuContainer>
            <MenuButton label="TRADE" url={AIRSWAP_TRADE_URL} />
            <MenuButton label="VOTE" url={AIRSWAP_VOTE_URL} />
            <MenuButton label="BUILD" url={AIRSWAP_BUILD_URL} />
            <MenuButton label="CHAT" url={AIRSWAP_CHAT_URL} />
          </MenuContainer>
        </HeaderSide>
      </HeaderContainer>
    </Container>
  );
}
