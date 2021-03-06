import React from 'react';

import { PageContainer, PageContent, PageItem, PageTitle, PageItems, PageItemOuter, PageAction, MoreLink } from './styles';
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
                <Link to={item.link}>
                  <PageItemOuter>
                    <PageTitle>{item.title}</PageTitle>
                    <PageContent>{item.description && <div dangerouslySetInnerHTML={{ __html: item.description }} />}</PageContent>
                    <PageAction>
                      <MoreLink>
                        MORE →
                      </MoreLink>
                    </PageAction>
                  </PageItemOuter>
                </Link>
              </PageItem>
            ))}
          </PageItems>
        </PageContainer>
      </Container>
    </WidgetWrapper>
  );
}
