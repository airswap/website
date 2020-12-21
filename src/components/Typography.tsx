import styled from 'styled-components';

interface TypographyProps {
  weight?: number | string;
  opacity?: 0.25 | 0.5 | 0.75 | 1;
  textAlign?: 'left' | 'center' | 'right';
  display?: 'block' | 'inline' | 'inline-block' | 'inline-flex';
  noWrap?: boolean;
  expand?: boolean;
  decoration?: string;
}

export const BaseText = styled.p<TypographyProps>`
  font-weight: ${({ weight }) => weight || 'normal'};
  text-decoration: ${({ decoration }) => decoration || 'none'};
  opacity: ${({ opacity }) => opacity || 1};
  width: ${({ expand }) => (expand ? '100%' : 'auto')};
  text-align: ${({ textAlign }) => textAlign || 'center'};
  color: ${({ color }) => color || 'inherit'};
  display: ${({ display }) => display || 'auto'};
  white-space: ${({ noWrap }) => (noWrap ? 'nowrap' : 'auto')};
  cursor: inherit;
`;

export const H6 = styled(BaseText)`
  font-size: 16px;
  line-height: 21px;
`;
