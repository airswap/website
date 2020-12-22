interface FormattedNumberConfig {
  num: number;
  digits: number;
  decimals?: number;
  minDecimals?: number;
  maxDecimals?: number;
  noEllipsis?: boolean;
}

export const getFormattedNumber = (config: FormattedNumberConfig) => {
  const { num, digits, minDecimals, maxDecimals, noEllipsis } = config;
  let new_num = num;
  let is_thousand = false;
  if (new_num > 999) {
    new_num = new_num / 1000;
    is_thousand = true;
  }
  const adjustedDigits = new_num.toString().indexOf('.') !== -1 ? digits + 1 : digits;
  const formattedAmount = Number(new_num.toString().substring(0, adjustedDigits)).toLocaleString(undefined, {
    minimumFractionDigits: minDecimals || 0,
    maximumFractionDigits: maxDecimals || adjustedDigits,
  });

  if (new_num.toString().length <= adjustedDigits) {
    return `${formattedAmount}${is_thousand ? 'K' : ''}`;
  }

  return `${formattedAmount}${noEllipsis ? '' : '...'}${is_thousand ? 'K' : ''}`;
};
