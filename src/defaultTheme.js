/**
 * Colors
 */
export const colors = {
    transparent: 'transparent',
    black: '#000000',
    white: '#ffffff',

    link: '#007BCF',
    linkHover: '#05BAFF',

    primary1: '#0A4682',
    primary2: '#009CE0',
    primary3: '#7DC8F0',
    primary4: '#C8E6FA',
    primary5: '#E2F2FC',

    primaryInteraction1: '#05BAFF',
    primaryInteraction2: '#0089C5',

    secondary1: '#1E6E32',
    secondary2: '#B0CB0B',
    secondary3: '#D2E182',
    secondary4: '#EBF0BE',
    secondary5: '#F5F7DE',

    secondaryInteraction1: '#C3DE21',
    secondaryInteraction2: '#8DA819',

    tertiary1: '#8C005A',
    tertiary2: '#E6007E',
    tertiary3: '#F0A5C3',
    tertiary4: '#FAD2E6',
    tertiary5: '#FCE8F2',

    tertiaryInteraction1: '#FF1F9A',
    tertiaryInteraction2: '#CF0071',

    quanternary1: '#994916',
    quanternary2: '#FFB900',
    quanternary3: '#FFE57E',
    quanternary4: '#FEF5B2',
    quanternary5: '#FEFAD8',

    quinary1: '#DDDCD5',
    quinary2: '#EEEAE1',
    quinary3: '#F8F6F0',

    senary1: '#363636',
    senary2: '#767676',
    senary3: '#CECECE',
    senary4: '#eeeeee'
};
export default {
    colors,
    /**
     * Breakpoints
     */
    screens: {
        xs: 320,
        sm: 600,
        md: 768,
        lg: 1024,
        xl: 1240
    },

    fonts: {
        sans: [
            'system-ui',
            'BlinkMacSystemFont',
            '-apple-system',
            'Segoe UI',
            'Roboto',
            'Oxygen',
            'Ubuntu',
            'Cantarell',
            'Fira Sans',
            'Droid Sans',
            'Helvetica Neue',
            'sans-serif'
        ],
        serif: [
            'Sanchez',
            'Constantia',
            'Lucida Bright',
            'Lucidabright',
            'Lucida Serif',
            'Lucida',
            'DejaVu Serif',
            'Bitstream Vera Serif',
            'Liberation Serif',
            'Georgia',
            'serif'
        ],
        mono: ['Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace']
    },

    textSizes: {
        //assuming base font-size is 16px
        xs: '.75rem', // 12px
        sm: '.875rem', // 14px
        base: '1rem', // 16px
        copy: '1.125rem', // 18px
        // this is the "scale" found in FDR
        '6': '1.25rem', // 20px
        '5': '1.375rem', // 22px
        '4': '1.625rem', // 26px
        '3': '1.75rem', // 28px
        '2': '2rem', // 32px
        '1': '2.625rem' // 42px
    },

    fontWeights: {
        // hairline: 100,
        // thin: 200,
        // light: 300,
        normal: 400,
        // medium: 500,
        semibold: 600,
        bold: 700
        // extrabold: 800,
        // black: 900
    },

    // LineHeight
    leading: {
        none: 1,
        tight: 1.25,
        normal: 1.35,
        copy: 1.5,
        loose: 2
    },
    // word-spacing
    tracking: {
        tight: '-0.05em',
        normal: '0',
        wide: '0.05em'
    },

    borderWidths: {
        default: '1px',
        '0': '0',
        '2': '2px',
        '4': '4px',
        '8': '8px'
    },

    borderRadius: {
        none: '0',
        sm: '3px',
        default: '4px',
        lg: '5px',
        full: '9999px'
    },

    width: {
        // Folksam specific
        contentWrapper: '1240px',
        outerContentWrapper: '1390px',
        auto: 'auto',
        px: '1px',
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '6': '1.5rem',
        '8': '2rem',
        '10': '2.5rem',
        '12': '3rem',
        '16': '4rem',
        '24': '6rem',
        '32': '8rem',
        '48': '12rem',
        '64': '16rem',
        '1/2': '50%',
        '1/3': '33.33333%',
        '2/3': '66.66667%',
        '1/4': '25%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/6': '16.66667%',
        '5/6': '83.33333%',
        full: '100%',
        screen: '100vw'
    },

    height: {
        auto: 'auto',
        px: '1px',
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '6': '1.5rem',
        '8': '2rem',
        '10': '2.5rem',
        '12': '3rem',
        '16': '4rem',
        '24': '6rem',
        '32': '8rem',
        '48': '12rem',
        '64': '16rem',
        full: '100%',
        screen: '100vh'
    },

    padding: {
        px: '1px',
        // Folksam specific
        sm: '1.188rem',
        md: '1.5rem',
        lg: '2.5rem',
        // Scale
        '0': '0',
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '8': '2rem'
    },

    margin: {
        auto: 'auto',
        // Folksam specific
        smallSiteMargin: '19px',
        mediumSiteMargin: '24px',
        largeSiteMargin: '40px',
        sm: '1.188rem',
        md: '1.5rem',
        lg: '2.5rem',
        // Scale
        '0': '0',
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '8': '2rem',
        '9': '2.1875rem'
    },

    negativeMargin: {
        auto: 'auto',
        // Folksam specific
        sm: '1.188rem',
        md: '1.5rem',
        lg: '2.5rem',
        // Scale
        '0': '0',
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '6': '1.5rem',
        '8': '2rem'
    },

    shadows: {
        default: '0 2px 8px 0 rgba(118, 118, 118, 0.4)',
        md: '0 4px 8px 0 #767676',
        lg: '0 15px 30px 0 #767676',
        inner: 'inset 0 2px 1px 0 rgba(0, 0, 0, 0.2)',
        down: '0 6px 2px -4px rgba(0, 0, 0, 0.1)',
        none: 'none'
    },

    zIndex: {
        auto: 'auto',
        '0': 0,
        '10': 10,
        '20': 20,
        '30': 30,
        '40': 40,
        '50': 50
    },

    opacity: {
        '0': '0',
        '25': '.25',
        '50': '.5',
        '75': '.75',
        '100': '1'
    },
    animation: {
        time: {
            short: '1.3s',
            quick: '0.3s'
        }
    }
};
