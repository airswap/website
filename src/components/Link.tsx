import React from 'react';
import styled, { css } from 'styled-components';
import parseUrl from '../utils/getRelativeUrl';
import { Link as LinkRouter } from 'react-router-dom';
interface LinkProps {
  to: string;
  children?: React.ReactNode;
  primaryColor?: boolean;
}
interface LinkFragmentProps {
  primaryColor?: boolean;
}

const Inner = styled.span<LinkFragmentProps>`
  cursor: pointer;
  text-decoration: none;
  color: #ffffff;
  ${props =>
    props.primaryColor &&
    css`
      color: ${({ theme }) => theme.palette.primaryColor};
    `}
`;

export default function Link(props: LinkProps) {
  const { primaryColor, to, children } = props;
  const relativeUrl = parseUrl(to);
  const newTab = to && !relativeUrl;

  if (!newTab) {
    return (
      <LinkRouter to={to}>
        <Inner primaryColor={primaryColor}>{children}</Inner>
      </LinkRouter>
    );
  }
  return (
    <a href={to || '/'} target="_blank">
      <Inner primaryColor={primaryColor}>{children}</Inner>
    </a>
  );
}
