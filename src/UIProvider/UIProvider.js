import React from 'react';
import { ThemeProvider } from 'react-jss';
import PropTypes from 'prop-types';
import defaultTheme from '../defaultTheme';

const UIProvider = ({ theme, children }) => (
    <ThemeProvider theme={defaultTheme}>
        {children}
    </ThemeProvider>
);

UIProvider.propTypes = {
    /** A theme object */
    theme: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    children: PropTypes.node
};

export default UIProvider;
