import styled from 'styled-components';
import { responsive } from '../../app/responsive';
import { H6 } from '../../components/Typography';
import Flex from '../../components/Flex';

export const VolumeContainer = styled(Flex).attrs({ direction: 'row', justify: 'space-between' })`
  width: 100%;
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  text-transform: uppercase;
  margin-bottom: ${({ theme }) => `${theme.gridPoint * 4}px`};
  @media ${responsive.smMax} {
    align-items: flex-start;
    margin-bottom: 22px;
  }
`;

export const VolumeTitle = styled.div`
  @media ${responsive.smMax} {
    width: calc((100vw - 184px - 32px)/2);
    min-width: 72px;
  }
`;

export const VolumeContent = styled.div`
  display: flex;
  flex-flow: wrap;
  font-weight: normal;

  .volumne-loading {
    padding: 8px;
    height: 16px;
  }
  @media ${responsive.smMax} {
    flex: 1;
    min-width: 0;
    & > * {
      margin: 0 20px 10px 0;
    }
  }
`;
