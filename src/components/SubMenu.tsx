import React from 'react';
import styled, { css } from 'styled-components';
import { subMenus } from '../constants';
import { NavLink } from 'react-router-dom';
import { Container } from '../app/styles';
import { responsive } from '../app/responsive';

const SubMenuWrapper = styled.div`
  display: block;
  margin-bottom: 64px;

  a {
    display: inline-flex;
    align-items: center;
    font-size: 18px;
    line-height: 24px;
    color: #666;
    font-weight: 500;

    &:not(:last-child):after {
      content: '';
      width: 2px;
      height: 2px;
      display: inline-block;
      border-radius: 100%;
      background-color: ${({ theme }) => theme.palette.primaryColor};
      margin: 0 12px;

      @media ${responsive.smMax} {
        display: none;
      }
    }

    @media ${responsive.smMax} {
      line-height: 29px;
    }
  }
`;

const Menus = styled.div`
  display: flex;
  flex-flow: wrap;
  align-items: center;
  padding: 10px 20px;
  border: 1px dashed rgba(255, 255, 255, 0.5);
  @media ${responsive.smMax} {
    padding: 16px;
    flex-direction: column;
    justify-content: center;
  }
`;

export default function SubMenu(props) {
  const prefix = '';
  return (
    <SubMenuWrapper>
      <Container>
        <Menus>
          {subMenus.map((item, index) => (
            <NavLink
              key={index}
              to={`${prefix}/${item.to}`}
              activeClassName="selected"
              activeStyle={{
                fontWeight: 700,
                color: 'white',
              }}
            >
              {item.label}
            </NavLink>
          ))}
        </Menus>
      </Container>
    </SubMenuWrapper>
  );
}
