import styled from 'styled-components';

import Flex from '../components/Flex';
import { H6 } from '../components/Typography';

export const AppContainer = styled(Flex)`
  position: relative;
`;

export const HeaderContainer = styled(Flex).attrs({ direction: 'row', justify: 'space-between' })`
  width: 100%;
  max-width: 1440px;
  padding: 30px;
  margin: auto;
`;

export const AirswapLogoContainer = styled(Flex).attrs({ align: 'flex-start' })`
  svg {
    height: 30px;
  }
`;

export const ContentContainer = styled(Flex)`
  width: 100%;
  max-width: 1440px;
`;

export const MenuContainer = styled(Flex).attrs({ direction: 'row' })``;

export const LinkContainer = styled(Flex).attrs({ direction: 'row' })``;

export const LinkText = styled(H6)`
`;

export const FooterContainer = styled(Flex).attrs({ direction: 'row', justify: 'space-between' })`
  width: 100%;
  max-width: 1440px;
  padding: 30px;
  margin: auto;
`;
