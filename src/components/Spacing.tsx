import styled from 'styled-components';

interface MarginProps {
  mr?: number;
  ml?: number;
  mt?: number;
  mb?: number;
}

export const Margin = styled.div<MarginProps>`
  margin-right: ${({ theme, mr }) => mr ? `${theme.gridPoint * mr}px` : 'auto'};
  margin-left: ${({ theme, ml }) => ml ? `${theme.gridPoint * ml}px` : 'auto'};
  margin-top: ${({ theme, mt }) => mt ? `${theme.gridPoint * mt}px` : 'auto'};
  margin-bottom: ${({ theme, mb }) => mb ? `${theme.gridPoint * mb}px` : 'auto'};
`;