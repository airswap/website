import React from 'react';
import styled, { css } from 'styled-components';
import { H2 } from './Typography';
import { responsive } from '../app/responsive';
import { Container } from '../app/styles';
import { Helmet } from 'react-helmet';

type DataType = {
  link?: string;
  title?: string;
  description?: string;
  content?: string;
};
interface SubDetailProps {
  data: DataType;
}

const Title = styled(H2).attrs({ expand: true, textAlign: 'left' })`
  color: white;
  font-weight: 400;
  font-family: 'Lora';
  margin-bottom: 32px;

  @media ${responsive.smMax} {
    font-size: 24px;
    line-height: 30px;
    margin-bottom: 24px;
  }
`;

const ShortDesc = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
`;

const SubContent = styled.div`
  color: white;
`;

const SubContentInner = styled.div`
  position: relative;
  padding-bottom: 56px;

  &:after {
    ${({ theme }) => theme.mixin.dashedLine};
    top: auto;
    bottom: 0;
  }
`;

const Content = styled.div`
  margin-top: 64px;
  font-weight: normal;
  font-size: 16px;
  line-height: 21px;

  img {
    width: 100%;
    height: auto;
  }
  p {
    margin-bottom: 24px;
  }
  a {
    color: white;
    &:hover {
      color: ${({ theme }) => theme.palette.primaryColor};
    }
  }
`;

export default function SubDetail(props: SubDetailProps) {
  const { data } = props;
  return (
    <SubContent>
      <Helmet>
        <title>{`AirSwap: ${data.title}`}</title>
        <meta name="description" content={data.description} />
        <meta property="og:title" content={`AirSwap: ${data.title}`} />
        <meta property="og:description" content={data.description} />
        <meta property="og:url" content={`${process.env.PUBLIC_URL}${data.link}`} />
        <meta name="twitter:title" content={`AirSwap: ${data.title}`} />
        <meta name="twitter:description" content={data.description} />
        <meta name="twitter:url" content={`${process.env.PUBLIC_URL}${data.link}`} />
        <link rel="canonical" href={`${process.env.PUBLIC_URL}${data.link}`} />
      </Helmet>
      <Container>
        <SubContentInner>
          <Title as={'h1'}>{data.title}</Title>
          <ShortDesc>{data.description}</ShortDesc>
          <Content>{data.content && <div dangerouslySetInnerHTML={{ __html: data.content }} />}</Content>
        </SubContentInner>
      </Container>
    </SubContent>
  );
}
