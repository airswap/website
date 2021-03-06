// colors are numbered from lightest to darkest

const colors = {
  blue: ['#1C95E8', '#4482FF', '#2B71FF', '#0F45B2'],
  green: ['#4BC68B'],
  yellow: ['#FFBE2B'],
  red: ['#FF0000', '#FF6245'],
  brown: ['#B27C00'],
  gray: ['#FFFFFF', '#FDFDFD', '#FAFAFA', '#F7F7F7', '#F2F2F2', '#EAEAEA', '#AAAAAA', '#7D7D7D', '#151212'],
};

const palette = {
  primaryColor: colors.blue[2],
  secondaryColor: colors.gray[3],
  foregroundColor: colors.gray[0],
  backgroundColor: colors.gray[1],
  backgroundColorSecondary: colors.gray[2],
  shadeColor: colors.gray[3],
  borderColor: colors.gray[2],
  successColor: colors.green[0],
  errorColor: colors.red[1],
  warningColor: colors.yellow[0],
  iconColor: colors.gray[4],
  primaryBlue: colors.blue[2],
};

const text = {
  fontFamily: 'Roboto Mono, proxima-nova, sans-serif',
  fontStyle: {
    italic: 'italic',
  },
  fontWeight: {
    thin: '200',
    light: '300',
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
  fontSize: {
    h1: '42px',
    h2: '36px',
    h3: '24px',
    h4: '20px',
    h5: '18px',
    h6: '16px',
    h7: '14px',
    h8: '12px',
    h9: '11px',
  },
  lineHeight: {
    h1: 1.25,
    h2: 1.25,
    h3: 1.25,
    h4: 1.25,
    h5: 1.25,
    h6: 1.25,
    h7: 1.25,
    h8: 1.25,
    h9: 1.25,
  },
};

const fixed = {
  maxWidth: '1240px',
};

const line = {
  weight: {
    light: '1px',
    normal: '2px',
    heavy: '3px',
  },
};

const animation = {
  defaultTransition: 0.3,
};

const spacing = {
  widgetPadding: '40px',
  mobileWidgetPadding: '30px',
};

const gridPoint = 8;

const mixin = {
  dashedLine: () => `
    content: '';
    width: 150px;
    border-top: 1px dashed rgba(255, 255, 255, 0.5);
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
  `,
};

const theme = {
  animation,
  fixed,
  colors,
  palette,
  text,
  spacing,
  line,
  gridPoint,
  mixin,
};

export default theme;
