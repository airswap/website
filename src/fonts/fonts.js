import { createGlobalStyle } from 'styled-components';

import RobotoMonoRegular from './robotoMono/RobotoMono-Regular.ttf';
import RobotoMonoMedium from './robotoMono/RobotoMono-Medium.ttf';
import RobotoMonoBold from './robotoMono/RobotoMono-Bold.ttf';
import LoraRegular from './lora/Lora-Regular.ttf';
import LoraBold from './lora/Lora-Bold.ttf';

export default createGlobalStyle`
    @font-face {
        font-family: 'Roboto Mono';
        src: url(${RobotoMonoRegular}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }
    @font-face {
        font-family: 'Roboto Mono';
        src: url(${RobotoMonoMedium}) format('truetype');
        font-weight: 500;
        font-style: normal;
        font-display: swap;
    }
    @font-face {
        font-family: 'Roboto Mono';
        src: url(${RobotoMonoBold}) format('truetype');
        font-weight: 700;
        font-style: normal;
        font-display: swap;
    }
    @font-face {
        font-family: 'Lora';
        src: url(${LoraRegular}) format('truetype');
        font-weight: 400;
        font-style: normal;
        font-display: swap;
    }
    @font-face {
        font-family: 'Lora';
        src: url(${LoraBold}) format('truetype');
        font-weight: 700;
        font-style: normal;
        font-display: swap;
    }
`;