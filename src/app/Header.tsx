import React from 'react';
import Volume from '../widgets/Volume';
import Flex from '../components/Flex';
import { AIRSWAP_BUILD_URL, AIRSWAP_CHAT_URL, AIRSWAP_TRADE_URL, AIRSWAP_VOTE_URL } from '../constants';
import { ReactComponent as AirswapLogo } from '../static/airswap-logo.svg';
import { AirswapLogoContainer, HeaderContainer, MenuContainer } from './styles';
import Button from '../components/Button';

interface ButtonProps {
  label: string;
  url: string;
}

function MenuButton(props: ButtonProps) {
  return (
    <Flex align="flex-start" direction="row">
      <Button url={props.url}>{props.label}</Button>
    </Flex>
  );
}

export default function Header() {
  return (
    <HeaderContainer>
      <AirswapLogoContainer>
        <AirswapLogo height={96} />
      </AirswapLogoContainer>
      <Volume />
      <MenuContainer>
        <MenuButton label="TRADE" url={AIRSWAP_TRADE_URL} />
        <MenuButton label="VOTE" url={AIRSWAP_VOTE_URL} />
        <MenuButton label="BUILD" url={AIRSWAP_BUILD_URL} />
        <MenuButton label="CHAT" url={AIRSWAP_CHAT_URL} />
      </MenuContainer>
    </HeaderContainer>
  );
}
