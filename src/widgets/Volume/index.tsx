import React from 'react';

import { getFormattedNumber } from '../../utils/transformations';
import Container, { VolumeProps } from './Container';
import Link from '../../components/Link';
import { AIRSWAP_EXPLORE_URL } from '../../constants';
import { VolumeContainer, VolumeContent, VolumeTitle } from './styles';
import Flex from '../../components/Flex';

interface VolumeValueProps {
  label: string;
  value: string;
}

function VolumeValue(props: VolumeValueProps) {
  return (
    <Flex align="flex-start" direction="row">
      {props.label}: {props.value}
    </Flex>
  );
}

function Volume(props: VolumeProps) {
  const getTotalVolume = days => {
    const tradeVolume = props.getTradeVolumeByDate({ days });
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
      </VolumeContent>
      <Link url={AIRSWAP_EXPLORE_URL}>MORE</Link>
    </VolumeContainer>
  );
}

export default Container(Volume);
