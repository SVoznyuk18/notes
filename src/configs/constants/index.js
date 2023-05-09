export const breakPoints = {
    MOBILE_S: 375,
    MOBILE: 576,
    TABLET: 768,
    TABLET_L: 992,
    DESKTOP: 1024,
    DESKTOP_L: 1200,
};

const mediaQuery = (width) => `@media screen and (max-width: ${width - 1}px)`;

export const media = {
    mobileS: mediaQuery(breakPoints.MOBILE_S),
    mobile: mediaQuery(breakPoints.MOBILE),
    tablet: mediaQuery(breakPoints.TABLET),
    tabletL: mediaQuery(breakPoints.TABLET_L),
    desktop: mediaQuery(breakPoints.DESKTOP),
    desktopL: mediaQuery(breakPoints.DESKTOP_L),
};