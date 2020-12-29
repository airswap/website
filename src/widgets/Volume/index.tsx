import React from 'react';

import { getFormattedNumber } from '../../utils/transformations';
import Container, { VolumeProps } from './Container';
import Link from '../../components/Link';
import { Margin } from '../../components/Spacing';
import { AIRSWAP_EXPLORE_URL } from '../../constants';
import { VolumeContainer, VolumeContent, VolumeTitle } from './styles';
import Flex from '../../components/Flex';

interface VolumeValueProps {
  label: string;
  value: any;
}

function VolumeValue(props: VolumeValueProps) {
  return (
    <Margin mr={5}>
      <Flex align="flex-start" direction="row">
        {props.label}:{' '}
        <span className="fw-bold ml-text">
          {!props.value ? (
            <div className={'volumne-loading'}>
              <div className={'dot-flashing'} />
            </div>
          ) : (
            props.value
          )}
        </span>
      </Flex>
    </Margin>
  );
}

function Volume(props: VolumeProps) {
  const getTotalVolume = days => {
    const tradeVolume = props.getTradeVolumeByDate({ days });
    if (!tradeVolume.length) return false;
    const totalVolume = tradeVolume.reduce((result, dateVolume) => result + dateVolume.volume, 0);
    return `${getFormattedNumber({
      num: totalVolume,
      digits: 10,
      minDecimals: 2,
      maxDecimals: 2,
      noEllipsis: true,
    })} ETH`;
  };
  return (
    <VolumeContainer>
      <VolumeTitle>VOLUME</VolumeTitle>
      <VolumeContent>
        <VolumeValue label="24H" value={getTotalVolume(1)}></VolumeValue>
        <VolumeValue label="1WK" value={getTotalVolume(7)}></VolumeValue>
        <VolumeValue label="1MO" value={getTotalVolume(30)}></VolumeValue>
        <div>
          <Link url={AIRSWAP_EXPLORE_URL}>MORE →</Link>
        </div>
      </VolumeContent>
    </VolumeContainer>
  );
}

export default Container(Volume);
