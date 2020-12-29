import React from 'react';
import styled from 'styled-components';
import {
  PluginContainer,
  PluginContent,
  PluginItem,
  PluginTitle,
  PluginItems,
  PluginItemInner,
  PluginItemOuter,
  PluginTextBG,
  PluginItemsWrapper,
} from './styles';
import { WidgetTitle, WidgetWrapper } from '../styles';
import { pluginData } from '../../constants';
import Link from '../../components/Link';
import { Container } from '../../app/styles';
import { ReactComponent as ArrowRight } from '../../static/arrow-right.svg';

const PluginImageBackground = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

export default function Plugins() {
  return (
    <WidgetWrapper>
      <Container>
        <PluginContainer>
          <WidgetTitle as={'h2'} mb>
            {pluginData.title}
          </WidgetTitle>
          <PluginItemsWrapper>
            <PluginItems>
              {pluginData.items.map(item => (
                <PluginItem key={item.title}>
                  <PluginItemOuter>
                    <PluginImageBackground src={item.thumbnail} />
                    <PluginItemInner>
                      <Link to={item.link}>
                        <PluginTitle>
                          <PluginTextBG>{item.title}</PluginTextBG>
                        </PluginTitle>
                        <PluginContent>
                          <PluginTextBG>
                            {item.description} <ArrowRight />
                          </PluginTextBG>
                        </PluginContent>
                      </Link>
                    </PluginItemInner>
                  </PluginItemOuter>
                </PluginItem>
              ))}
            </PluginItems>
          </PluginItemsWrapper>
        </PluginContainer>
      </Container>
    </WidgetWrapper>
  );
}
