import styled, { css } from 'styled-components';
import { H2 } from '../components/Typography';
import { responsive } from '../app/responsive';

interface WidgetTitleProps {
  mb?: boolean;
}

export const WidgetTitle = styled(H2).attrs({ expand: true, textAlign: 'left' })<WidgetTitleProps>`
  color: white;
  font-weight: 400;
  text-align: center;
  font-family: "Lora";

  padding-top: 56px;

  ${props => props.mb && css`
    margin-bottom: 56px;

    @media ${responsive.smMax} {
      margin-bottom: 32px;
  }
  `}
  @media ${responsive.smMax} {
    font-size: 24px;
    line-height: 30px;
  }
`;

export const WidgetWrapper = styled.div`
  margin-bottom: 100px;

  @media ${responsive.smMax} {
    margin-bottom: 56px;
  }

  &:first-child {
    margin-top: 20px;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;
