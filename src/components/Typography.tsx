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

export const H1 = styled(BaseText)`
  font-size: 46px;
  letter-spacing: -1px;
  line-height: 51px;
`;

export const H2 = styled(BaseText)`
  font-size: 40px;
  letter-spacing: 0;
  line-height: 1;
`;

export const H3 = styled(BaseText)`
  font-size: 36px;
  letter-spacing: 0;
  line-height: calc(12 / 10);
`;

export const H4 = styled(BaseText)`
  font-size: 28px;
  letter-spacing: 0;
  line-height: calc(12 / 10);
`;

export const H5 = styled(BaseText)`
  font-size: 22px;
  letter-spacing: 0;
`;

export const H6 = styled(BaseText)`
  font-size: 18px;
  letter-spacing: 0;
`;
