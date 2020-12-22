import React from 'react';

import { PageContainer, PageContent, PageItem, PageTitle } from './styles';
import { WidgetTitle } from '../styles';
import { listPageData } from '../../constants';
import Link from '../../components/Link';

export default function Pages() {
  return (
    <PageContainer>
      <WidgetTitle>{listPageData.title}</WidgetTitle>
      {listPageData.items.map(item => (
        <PageItem key={item.title}>
          <PageTitle>{item.title}</PageTitle>
          <PageContent>{item.description}</PageContent>
          <Link url={item.link}>MORE</Link>
        </PageItem>
      ))}
    </PageContainer>
  );
}
