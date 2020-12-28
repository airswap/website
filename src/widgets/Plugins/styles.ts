import styled from 'styled-components';

import { H4 } from '../../components/Typography';
import Flex from '../../components/Flex';
import { responsive } from '../../app/responsive';

export const PluginContainer = styled.div`
  width: 100%;
`;

export const PluginItemsWrapper = styled.div`
`;

export const PluginItems = styled.div`
  display: flex;
  flex-flow: wrap;
  margin: 0 -12px;
  @media ${responsive.smMax} {
    margin: 0
  }
`;

export const PluginItem = styled.div`
  width: 33.33%;
  padding: 0 12px;
  @media ${responsive.smMax} {
    width: 100%;
    padding: 0;
    margin-bottom: 16px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const PluginTitle = styled(H4).attrs({textAlign: 'left'})`
  font-family: "Lora";
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 6px;
`;

export const PluginTextBG = styled.div `
  background: #1a1b1e;
  display: inline-flex;
  padding: 6px 10px;
`;

export const PluginContent = styled.div`
  font-size: 12px;
  line-height: 16px;
  ${PluginTextBG} {
    display: flex;
    align-items: center;
    justify-content: space-between;

    svg {
      margin-left: 8px;
    }
  }
`;

export const PluginItemInner = styled.div `
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  z-index: 2;
`;

export const PluginItemOuter = styled.div `
  position: relative;
  display: block;
  padding-bottom: 40%;
  min-height: 130px;
`;
