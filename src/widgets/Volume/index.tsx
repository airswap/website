import React from 'react';

import { getFormattedNumber } from '../../utils/transformations';
import Container, { VolumeProps } from './Container';

function Volume(props: VolumeProps) {
  const getTotalVolume = (days) => {
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
  return 'VOLUME   24HR: ' + getTotalVolume(1) + '  1WK: ' + getTotalVolume(7) + '  1MO: ' + getTotalVolume(30);
}

export default Container(Volume);
