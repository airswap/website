import React from 'react';

import Flex from '../components/Flex';
import Link from '../components/Link';
import { AIRSWAP_PRIVACY_URL, AIRSWAP_SUPPORT_URL, AIRSWAP_TERMS_URL, AIRSWAP_TWITTER, AIRSWAP_DISCORD, AIRSWAP_TELEGRAM, AIRSWAP_DOCS_URL } from '../constants';
import { ReactComponent as AirswapLogo } from '../static/airswap-logo.svg';
import { AirswapLogoContainer, FooterContainer, LinkContainer, LinkText, Container } from './styles';

interface LinkProps {
  label: string;
  url: string;
}

function FooterLink(props: LinkProps) {
  return (
    <Flex align="center" direction="row">
      <Link to={props.url}>
        <LinkText>{props.label}</LinkText>
      </Link>
    </Flex>
  );
}

export default function Header() {
  return (
    <Container>
      <FooterContainer>
      <LinkContainer>
          <FooterLink label="DISCORD" url={AIRSWAP_DISCORD} />
          <FooterLink label="TWITTER" url={AIRSWAP_TWITTER} />
          <FooterLink label="TELEGRAM" url={AIRSWAP_TELEGRAM} />
          <FooterLink label="SUPPORT" url={AIRSWAP_SUPPORT_URL} />
        </LinkContainer>
        <LinkContainer>
          <FooterLink label="DOCS" url={AIRSWAP_DOCS_URL} />
          <FooterLink label="PRIVACY" url={AIRSWAP_PRIVACY_URL} />
          <FooterLink label="TERMS" url={AIRSWAP_TERMS_URL} />
          <LinkText>
            <span className={'fw-normal'}>COPYRIGHT</span> 2021
          </LinkText>
        </LinkContainer>
        <AirswapLogoContainer>
          <Link to="/">
            <AirswapLogo height={32} />
          </Link>
        </AirswapLogoContainer>
      </FooterContainer>
    </Container>
  );
}
