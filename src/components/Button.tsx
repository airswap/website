import React from 'react';
import styled from 'styled-components';

const ButtonEl = styled.a`
  cursor: pointer;
  text-decoration: none;
  border: 3px solid #2b71ff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 45px;
  box-sizing: border-box;
  padding: 0 16px;
  color: #ffffff;
  font-weight: 700;
  transition: all 300ms ease;

  &:hover {
    background: #2b71ff;
    color: #fff;
  }
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
