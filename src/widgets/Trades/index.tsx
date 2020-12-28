import React from 'react';

import { TradeContainer, TradeContent, TradeItem, TradeTitle, TradeItems, TradeItemsWrapper } from './styles';
import { WidgetTitle, WidgetWrapper } from '../styles';
import { wayToTradeData } from '../../constants';
import { Container } from '../../app/styles';

export default function Trades() {
  return (
    <WidgetWrapper>
      <Container>
        <TradeContainer>
          <WidgetTitle as={'h2'}>{wayToTradeData.title}</WidgetTitle>
          <TradeItemsWrapper>
            <TradeItems>
              {wayToTradeData.items.map(item => (
                <TradeItem key={item.title}>
                  <TradeTitle>{item.title}</TradeTitle>
                  <TradeContent>{item.description}</TradeContent>
                </TradeItem>
              ))}
            </TradeItems>
          </TradeItemsWrapper>
        </TradeContainer>
      </Container>
    </WidgetWrapper>
  );
}
