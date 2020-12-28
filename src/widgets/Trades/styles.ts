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
    content: '';
    width: 150px;
    border-top: 1px dashed rgba(255, 255, 255, 0.5);
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
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
