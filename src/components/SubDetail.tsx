import React from 'react';
import styled, { css } from 'styled-components';
interface LinkProps {
  url?: string;
  children?: React.ReactNode;
  primaryColor?: boolean;
}

const LinkEl = styled.a<LinkProps>`
  cursor: pointer;
  text-decoration: none;
  color: #ffffff;
  ${props => props.primaryColor && css`
    color: ${({ theme }) => theme.palette.primaryColor};
  `}
`;

export default function Link(props: LinkProps) {
  return (
    <LinkEl primaryColor={props.primaryColor} href={props.url} target="_blank">
      {props.children}
    </LinkEl>
  );
}
