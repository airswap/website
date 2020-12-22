import React from 'react';
import styled from 'styled-components';

const ButtonEl = styled.a`
  cursor: pointer;
  text-decoration: none;
  border: 3px solid #2b71ff;
  box-sizing: border-box;
  padding: 0 16px;
  margin-right: 16px;
  color: #ffffff;
`;

interface ButtonProps {
  url: string;
  children: React.ReactNode;
}

export default function Button(props: ButtonProps) {
  return (
    <ButtonEl href={props.url} target="_blank">
      {props.children}
    </ButtonEl>
  );
}
