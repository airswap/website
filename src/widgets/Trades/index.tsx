import React from 'react';

import { TradeContainer, TradeContent, TradeItem, TradeTitle } from './styles';
import { WidgetTitle } from '../styles';
import { wayToTradeData } from '../../constants';

export default function Trades() {
  return (
    <TradeContainer>
      <WidgetTitle>{wayToTradeData.title}</WidgetTitle>
      {wayToTradeData.items.map(item => (
        <TradeItem key={item.title}>
          <TradeTitle>{item.title}</TradeTitle>
          <TradeContent>{item.description}</TradeContent>
        </TradeItem>
      ))}
    </TradeContainer>
  );
}
