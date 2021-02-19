import React from 'react';

import Flex from '../components/Flex';
import Link from '../components/Link';
import { AIRSWAP_PRIVACY_URL, AIRSWAP_FAQ_URL, AIRSWAP_TERMS_URL, AIRSWAP_REDDIT, AIRSWAP_TWITTER, AIRSWAP_DISCORD, AIRSWAP_TELEGRAM, AIRSWAP_DOCS_URL } from '../constants';
import { ReactComponent as AirSwapLogo } from '../static/airswap-logo.svg';
import { ReactComponent as DefiPulseLogo } from '../static/defipulse-logo.svg';
import { AirSwapLogoContainer, FooterContainer, LinkContainer, LinkText, Container } from './styles';

interface LinkProps {
  label: string;
  url: string;
  blank?: boolean;
}

function FooterLink(props: LinkProps) {
  return (
    <Flex align="center" direction="row">
      <Link to={props.url} blank={props.blank}>
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
          <FooterLink label="REDDIT" url={AIRSWAP_REDDIT} />
        </LinkContainer>
        <LinkContainer>
          <FooterLink label="FAQ" url={AIRSWAP_FAQ_URL} />
          <FooterLink label="DOCS" url={AIRSWAP_DOCS_URL} />
          <FooterLink label="PRIVACY" url={AIRSWAP_PRIVACY_URL} blank={true} />
          <FooterLink label="TERMS" url={AIRSWAP_TERMS_URL} blank={true} />
          <LinkText>
            <span className={'fw-normal'}>COPYRIGHT</span> 2021
          </LinkText>
        </LinkContainer>
        <AirSwapLogoContainer>
          <Link to="/">
            <AirSwapLogo height={32} />
          </Link>
        </AirSwapLogoContainer>
        <AirSwapLogoContainer>
          <Link to="https://defipulse.com/">
            <DefiPulseLogo height={12} />
          </Link>
        </AirSwapLogoContainer>
      </FooterContainer>
    </Container>
  );
}
