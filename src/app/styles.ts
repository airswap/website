import styled from 'styled-components';
import { responsive } from './responsive';
import Flex from '../components/Flex';
import { H6 } from '../components/Typography';

export const AppContainer = styled(Flex)`
  position: relative;
`;

export const HeaderContainer = styled(Flex).attrs({ direction: 'row', justify: 'space-between' })`
  width: 100%;
  margin: auto;
  padding-top: 80px;
  padding-bottom: 80px;

  @media ${responsive.smMax} {
    display: block;
    padding: 32px 0;
    svg {
      width: auto;
      height: 60px;
    }
  }
`;

export const HeaderSide = styled(Flex).attrs({ direction: 'column', align: 'stretch' })`
  flex: 1;
  min-width: 0;
  margin-left: 110px;

  @media ${responsive.smMax} {
    margin: 32px 0 0 0;
  }
`;

export const AirswapLogoContainer = styled(Flex).attrs({ align: 'flex-start' })`
  padding-top: 28px;
  @media ${responsive.smMax} {
    justify-content: center;
    align-items: center;
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
`;

export const MenuContainer = styled(Flex).attrs({ direction: 'row' })`
  margin: 0 -10px;
  flex-flow: wrap;
  > * {
    flex: 1;
  }
`;

export const MenuButtonOuter = styled.div`
  padding: 0 10px;
  @media ${responsive.smMax} {
    width: 50%;
    flex: none;
    margin-bottom: 16px;
  }
  a {
    width: 100%;
  }
`;

export const LinkContainer = styled(Flex).attrs({ direction: 'row' })`
  justify-content: center;
  flex-flow: wrap;
  max-width: 100%;
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;

  > * {
    &:not(:last-child) {
      &:after {
        content: '';
        width: 2px;
        height: 2px;
        border-radius: 100%;
        margin: 0 16px;
        background: ${({ theme }) => theme.palette.primaryColor};

        @media ${responsive.smMax} {
          margin: 0 12px;
        }
      }
    }
  }
`;

export const LinkText = styled(H6)`
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
`;

export const FooterContainer = styled(Flex).attrs({ direction: 'column', justify: 'center', align: 'center' })`
  width: 100%;
  margin: auto;
  padding: 56px 0 112px 0;

  @media ${responsive.smMax} {
    padding: 56px 0 72px 0;
  }

  ${LinkContainer} {
    margin-bottom: 18px;
    @media ${responsive.smMax} {
      margin-bottom: 32px;
    }
  }
`;

export const Container = styled.div`
  width: 1056px;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 16px;

  @media (max-width: 1056px) {
    width: 100%;
  }
`;
