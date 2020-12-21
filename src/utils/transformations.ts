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

  const adjustedDigits = num.toString().indexOf('.') !== -1 ? digits + 1 : digits;
  const formattedAmount = Number(num.toString().substring(0, adjustedDigits)).toLocaleString(undefined, {
    minimumFractionDigits: minDecimals || 0,
    maximumFractionDigits: maxDecimals || adjustedDigits,
  });

  if (num.toString().length <= adjustedDigits) {
    return formattedAmount;
  }

  return `${formattedAmount}${noEllipsis ? '' : '...'}`;
};
