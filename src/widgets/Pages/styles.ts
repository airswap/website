import styled from 'styled-components';
import { responsive } from '../../app/responsive';
import { H4 } from '../../components/Typography';
import Flex from '../../components/Flex';

export const PageContainer = styled(Flex)`
  width: 100%;
`;

export const PageItems = styled.div`
  display: flex;
  flex-flow: wrap;
  margin: 0 -12px;

  @media ${responsive.smMax} {
    margin: 0;
  }
`;

export const PageItem = styled.div`
  padding: 0 12px;
  width: 33.33%;

  @media ${responsive.smMax} {
    width: 100%;
    padding: 0;
    margin-bottom: 16px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const PageItemOuter = styled.div`
  padding: 26px 32px;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    pointer-events: none;
    border: 1px dashed rgba(255, 255, 255, 0.5);
    transition: all 100ms ease;

  }

  &:hover {
    &:before {
      border: 3px solid #fff;
    }
  }
  
`;

export const PageTitle = styled(H4).attrs({textAlign: 'left'})`
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 24px;
  font-weight: 500;
`;

export const PageContent = styled.div`
  font-size: 12px;
  line-height: 16px;

  a {
    font-weight: 500;
  }
`;

export const PageAction = styled.div`
  text-align: right;
  margin-top: 16px;
  a {
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
  }
`;

export const MoreLink = styled.span `
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  color: ${({ theme }) => theme.palette.primaryColor};
`