import { createUseStyles } from 'react-jss';
/**
 * Simple utility for making a faux border from a box shadow.
 * @param {Number} width - the desired border width in px
 * @param {String} color - the desired border color
 * @returns {*} - a css box shadow declaration
 */
const getBorderStyle = (width, color) => ({
    boxShadow: `inset 0 0 0 ${width}px ${color}`
});

const fontSizeConstants = {
    small: 16,
    medium: 18,
    large: 20
};
const heightConstants = {
    small: 36,
    medium: 40,
    large: 44
};

export default createUseStyles(( theme ) => {
    const activeBoxShadow = theme.shadows.inner;

    return {
        button: {
            position: 'relative',
            boxSizing: 'border-box',
            fontFamily: theme.fonts.serif,
            fontWeight: theme.fontWeights.semibold,
            display: 'inline-flex',
            flexShrink: 0,
            minHeight: ({ height }) => heightConstants[height],
            fontSize: ({ fontSize }) => fontSizeConstants[fontSize],
            justifyContent: 'center',
            border: 'none',
            borderRadius: theme.borderRadius.full,
            backgroundColor: theme.colors.primary2,
            color: theme.colors.white,
            padding: [8, 40],
            minWidth: 110,
            transition: 'all 0.1s ease-out',
            cursor: 'pointer',
            overflow: 'hidden',
            '&:hover': {
                color: theme.colors.white, // mainly to override any Link styles
                backgroundColor: theme.colors.primary3
            },
            '&:focus': {
                outline: 0,
                backgroundColor: theme.colors.primary2,
                ...getBorderStyle(2, theme.colors.primary1)
            },
            '&:active': {
                boxShadow: `${activeBoxShadow} !important`,
                backgroundColor: theme.colors.primaryInteraction2
            },
            '&[disabled]': {
                opacity: 0.5,
                cursor: 'default',
                pointerEvents: 'none',
                userSelect: 'none'
            }
        },
        primary: {
            backgroundColor: theme.colors.secondary2,
            ...getBorderStyle(2, theme.colors.secondary2),
            '&:hover': {
                backgroundColor: theme.colors.secondaryInteraction1,
                ...getBorderStyle(2, theme.colors.secondaryInteraction1)
            },
            '&:focus': {
                backgroundColor: theme.colors.secondary2,
                ...getBorderStyle(2, theme.colors.secondary1)
            },
            '&:active': {
                backgroundColor: theme.colors.secondaryInteraction2
            }
        },
        secondary: {
            backgroundColor: theme.colors.tertiary2,
            ...getBorderStyle(2, theme.colors.tertiary2),
            '&:hover': {
                backgroundColor: theme.colors.tertiaryInteraction1
            },
            '&:focus': {
                backgroundColor: theme.colors.tertiary2,
                ...getBorderStyle(2, theme.colors.tertiary1)
            },
            '&:active': {
                backgroundColor: theme.colors.tertiaryInteraction2
            }
        },
        outline: {
            color: theme.colors.primary2,
            backgroundColor: theme.colors.white,
            ...getBorderStyle(1, theme.colors.primary2),
            '&:hover, &:active': {
                color: theme.colors.primary2,
                backgroundColor: theme.colors.primary5
            },
            '&:focus': {
                backgroundColor: theme.colors.primary5,
                ...getBorderStyle(2, theme.colors.primary1)
            }
        },
        full: {
            width: '100%',
            marginLeft: '0 !important'
        },
        small: {
            /* needs !important for now, because otherwise the function rule in `button` takes precedence */
            minHeight: `${heightConstants.small}px !important`,
            fontSize: `${fontSizeConstants.small}px !important`,
            padding: [8, 32]
        },
        asLink: {
            fontFamily: 'inherit',
            fontWeight: theme.fontWeights.normal,
            fontSize: 'inherit',
            border: 'none',
            padding: 0,
            background: 'transparent',
            color: theme.colors.link,
            cursor: 'pointer',
            '&:hover': {
                color: theme.colors.linkHover
            }
        },
        children: {
            display: 'flex',
            alignItems: 'center',
            transition: 'opacity 0.2s ease-out',
            opacity: ({ isBusy }) => (isBusy ? 0 : 1)
        },
        spinner: {
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            transition: 'opacity 0.2s ease-out',
            opacity: ({ isBusy }) => (isBusy ? 1 : 0)
        }
    };
});
