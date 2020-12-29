import React, { useEffect, useState } from 'react';

import { getFormattedNumber } from '../../utils/transformations';
import Container, { VolumeProps } from './Container';
import Link from '../../components/Link';
import { Margin } from '../../components/Spacing';
import { AIRSWAP_EXPLORE_URL } from '../../constants';
import { VolumeContainer, VolumeContent, VolumeTitle } from './styles';
import Flex from '../../components/Flex';
import { TradeVolumeByDay } from '../../types/Swap';
import { useCookies } from 'react-cookie';

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
              <div className={'dot-flashing'}/>
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
  const [tradeVolume1, setTradeVolume1] = useState<TradeVolumeByDay[]>([]);
  const [tradeVolume7, setTradeVolume7] = useState<TradeVolumeByDay[]>([]);
  const [tradeVolume30, setTradeVolume30] = useState<TradeVolumeByDay[]>([]);
  const [cookies, setCookie] = useCookies(['trade-value-1', 'trade-value-7', 'trade-value-30']);

  const getTotalVolume = days => {
    let tempTradeVolume = tradeVolume1;
    if (days == 7) {
      tempTradeVolume = tradeVolume7;
    } else if (days == 30) {
      tempTradeVolume = tradeVolume30;
    }
    if (!tempTradeVolume.length) {
      return cookies['trade-value-' + days];
    }
    const totalVolume = tempTradeVolume.reduce((result, dateVolume) => result + dateVolume.volume, 0);
    const formattedVolume = `${getFormattedNumber({
      num: totalVolume,
      digits: 10,
      minDecimals: 2,
      maxDecimals: 2,
      noEllipsis: true,
    })} ETH`;
    setCookie('trade-value-' + days, formattedVolume, { path: '/' });
    return formattedVolume;
  };

  useEffect(() => {
    const volume = props.getTradeVolumeByDate({ days: 1 });
    setTradeVolume1(volume);
  }, [1, props.getTradeVolumeByDate]);

  useEffect(() => {
    const volume = props.getTradeVolumeByDate({ days: 7 });
    setTradeVolume7(volume);
  }, [7, props.getTradeVolumeByDate]);

  useEffect(() => {
    const volume = props.getTradeVolumeByDate({ days: 30 });
    setTradeVolume30(volume);
  }, [30, props.getTradeVolumeByDate]);

  return (
    <VolumeContainer>
      <VolumeTitle>VOLUME</VolumeTitle>
      <VolumeContent>
        <VolumeValue label="24H" value={getTotalVolume(1)}></VolumeValue>
        <VolumeValue label="1WK" value={getTotalVolume(7)}></VolumeValue>
        <VolumeValue label="1MO" value={getTotalVolume(30)}></VolumeValue>
        <div>
          <Link to={AIRSWAP_EXPLORE_URL}>MORE →</Link>
        </div>
      </VolumeContent>
    </VolumeContainer>
  );
}

export default Container(Volume);
