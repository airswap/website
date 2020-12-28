const size = {
  xs: 480,
  sm: 767,
  md: 1024,
  lg: 1200,
}

export const responsive = {
  xsMin: `(min-width: ${size.xs + 1}px)`,
  smMin: `(min-width: ${size.sm + 1}px)`,
  mdMin: `(min-width: ${size.md + 1}px)`,
  lgMin: `(min-width: ${size.lg + 1}px)`,
  xsMax: `(max-width: ${size.xs}px)`,
  smMax: `(max-width: ${size.sm}px)`,
  mdMax: `(max-width: ${size.md}px)`,
  lgMax: `(max-width: ${size.lg}px)`
};