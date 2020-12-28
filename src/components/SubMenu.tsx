import React from 'react';
import styled, { css } from 'styled-components';
import { subMenus } from '../constants';
import { NavLink } from 'react-router-dom';
interface LinkProps {
  url?: string;
  children?: React.ReactNode;
  primaryColor?: boolean;
}

const SubMenuWrapper = styled.div`
  display: block;
`;

export default function SubMenu(props: LinkProps) {
  return (
    <SubMenuWrapper>
      {subMenus.map(item => (
        <NavLink to={item.to}>{item.label}</NavLink>
      ))}
    </SubMenuWrapper>
  );
}
