import styled from 'styled-components';

import { H4 } from '../../components/Typography';
import Flex from '../../components/Flex';
import { responsive } from '../../app/responsive';

export const TradeContainer = styled(Flex)`
  width: 100%;
`;

export const TradeItemsWrapper = styled.div`
  margin-top: 36px;
  padding-top: 36px;
  position: relative;
  &:before {
    ${({ theme }) => theme.mixin.dashedLine}
  }
  @media ${responsive.smMax} {
    margin-top: 16px;
    padding-top: 32px;
  }
`;

export const TradeItems = styled.div`
  display: flex;
  flex-flow: wrap;
  margin: 0 -40px;

  @media ${responsive.smMax} {
    margin: 0;
  }
`;

export const TradeItem = styled.div`
  padding: 0 40px;
  text-align: center;
  width: 33.33%;
  @media ${responsive.smMax} {
    width: 100%;
    padding: 0;
    margin-bottom: 32px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const TradeTitle = styled(H4)`
  font-size: 18px;
  line-height: 24px;
  font-weight: 500;
  margin-bottom: ${({ theme }) => `${theme.gridPoint}px`};
`;

export const TradeContent = styled.div`
  font-size: 12px;
  line-height: 16px;
`;
