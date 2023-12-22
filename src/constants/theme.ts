import { Dimensions } from "react-native";


export const palette = {
    primary: '#2C2F38',
    primaryLight: '#353842',
    primaryDark: '#252830',
    secondary: '#FF7269',
    secondaryLight: '#FFECB3',
    secondaryDark: '#FFA000',
    white: '#FFFFFF',
    lightWhite: '#f7f7f8',
    black: '#000000',
    gray: '#9E9E9E',
    grayLight: '#686F82',
    grayDark: '#212121',
    error: '#D32F2F',
    errorLight: '#FFCDD2',
    errorDark: '#B71C1C',
    warning: '#FFA000',
    warningLight: '#FFECB3',
    warningDark: '#FF6F00',
    info: '#1976D2',
    infoLight: '#BBDEFB',
    infoDark: '#0D47A1',
    success: '#388E3C',
    successLight: '#C8E6C9',
    successDark: '#1B5E20',
    first: '#fed130',
    third: '#ad7c4d',
    second: '#b9bbc1',
    

};
export const colors = {
    primary: palette.primary,
    primaryLight: palette.primaryLight,
    primaryDark: palette.primaryDark,
    secondary: palette.secondary,
    secondaryLight: palette.secondaryLight,
    secondaryDark: palette.secondaryDark,
    white: palette.white,
    lightWhite: palette.lightWhite,
    black: palette.black,
    gray: palette.gray,
    grayLight: palette.grayLight,
    grayDark: palette.grayDark,
    error: palette.error,
    errorLight: palette.errorLight,
    errorDark: palette.errorDark,
    warning: palette.warning,
    warningLight: palette.warningLight,
    warningDark: palette.warningDark,
    info: palette.info,
    infoLight: palette.infoLight,
    infoDark: palette.infoDark,
    success: palette.success,
    successLight: palette.successLight,
    successDark: palette.successDark,
    first: palette.first,
    second: palette.second,
    third: palette.third,
};

export const ColorPalette = {
    primary : "#f17300",
    primaryLight : "#F2E9E4",
    primaryDark : "#9A8C98",
    secondary : "#4A4E69",
    secondaryDark : "#22223B",
    gray900: "#212529",
    gray800: "#343A40",
    gray700: "#495057",
    gray600: "#6C757D",
    gray500: "#ADB5BD",
    gray400: "#CED4DA",
    gray300: "#DEE2E6",
    gray200: "#E9ECEF",
    gray100: "#F1F3F5",
    asd : '#A0A0A0',

    thirdDark : "#030D16",
    third : '#182028',
    thirdLight : '#626262',


    




}

export const dimensions = Dimensions.get('screen');
export const dWidth = Dimensions.get('screen').width;
export const dHeight = Dimensions.get('screen').height;

const theme = { palette, colors, dimensions, dWidth, dHeight };

export default theme;