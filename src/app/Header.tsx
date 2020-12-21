import React from 'react';
import Volume from '../widgets/Volume';
import Flex from '../components/Flex';
import Link from '../components/Link';
import {
  AIRSWAP_EXPLORE_URL,
  AIRSWAP_TRADE_URL,
  AIRSWAP_VOTE_URL,
  AIRSWAP_BUILD_URL,
  AIRSWAP_CHAT_URL,
} from '../constants';
import { ReactComponent as AirswapLogo } from '../static/airswap-logo.svg';
import { AirswapLogoContainer, HeaderContainer, ResourceContainer, ResourceLinkText } from './styles';

interface ResourceLinkProps {
  label: string;
  url: string;
}

function ResourceLink(props: ResourceLinkProps) {
  return (
    <Flex align="flex-start" direction="row">
      <Link url={props.url}>
        <ResourceLinkText>{props.label}</ResourceLinkText>
      </Link>
    </Flex>
  );
}


export default function Header() {
  return (
    <HeaderContainer>
      <AirswapLogoContainer>
        <AirswapLogo height={30} />
      </AirswapLogoContainer>
      <Volume/>
      <Link url={AIRSWAP_EXPLORE_URL}>
        <ResourceLinkText>MORE</ResourceLinkText>
      </Link>
      <ResourceContainer>
          <ResourceLink label="Trade" url={AIRSWAP_TRADE_URL} />
          <ResourceLink label="Vote" url={AIRSWAP_VOTE_URL} />
          <ResourceLink label="Build" url={AIRSWAP_BUILD_URL} />
          <ResourceLink label="Chat" url={AIRSWAP_CHAT_URL} />
      </ResourceContainer>
    </HeaderContainer>
  )
}

