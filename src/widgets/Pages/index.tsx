import React from 'react';

import { PageContainer, PageContent, PageItem, PageTitle, PageItems, PageItemOuter, PageAction } from './styles';
import { WidgetTitle, WidgetWrapper } from '../styles';
import { listPageData } from '../../constants';
import Link from '../../components/Link';
import { Container } from '../../app/styles';

export default function Pages() {
  return (
    <WidgetWrapper>
      <Container>
        <PageContainer>
          <WidgetTitle as={'h2'} mb={true} >{listPageData.title}</WidgetTitle>
          <PageItems>
            {listPageData.items.map(item => (
              <PageItem key={item.title}>
                <PageItemOuter>
                  <PageTitle>{item.title}</PageTitle>
                  <PageContent>{item.description}</PageContent>
                  <PageAction>
                    <Link primaryColor url={item.link}>
                      MORE →
                    </Link>
                  </PageAction>
                </PageItemOuter>
              </PageItem>
            ))}
          </PageItems>
        </PageContainer>
      </Container>
    </WidgetWrapper>
  );
}
