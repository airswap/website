import React from 'react';
import styled from 'styled-components';
import { PluginContainer, PluginContent, PluginItem, PluginTitle } from './styles';
import { WidgetTitle } from '../styles';
import { pluginData } from '../../constants';
import Link from '../../components/Link';

const PluginImageBackground = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export default function Plugins() {
  return (
    <PluginContainer>
      <WidgetTitle>{pluginData.title}</WidgetTitle>
      {pluginData.items.map(item => (
        <PluginItem key={item.title}>
          <PluginImageBackground src={item.thumbnail} />
          <Link url={item.link}>
            <PluginTitle>{item.title}</PluginTitle>
            <PluginContent>{item.description}</PluginContent>
          </Link>
        </PluginItem>
      ))}
    </PluginContainer>
  );
}
