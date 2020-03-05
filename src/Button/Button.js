import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Spinner from '../Spinner/index.js';
import useStyles from './styles';

const Button = ({
    as: Element,
    componentProps,
    small,
    primary,
    secondary,
    outline,
    full,
    asLink,
    isBusy,
    height,
    fontSize,
    children,
    ...other
}) => {
    const classes = useStyles({ height, fontSize, isBusy });
    const buttonStyle = classNames(classes.button, {
        [classes.small]: small,
        [classes.primary]: primary,
        [classes.secondary]: secondary,
        [classes.outline]: outline,
        [classes.full]: full
    });

    return (
        <Element {...other} {...componentProps} className={asLink ? classes.asLink : buttonStyle}>
            {/** The children */}
            <div className={classes.children}>{children}</div>

            {!asLink ? (
                /** The spinner */
                <div className={classes.spinner}>{isBusy && <Spinner inverted={!outline} />}</div>
            ) : null}
        </Element>
    );
};

/* statics */
Button.sizes = {
    small: 'small',
    medium: 'medium',
    large: 'large'
};

Button.defaultProps = {
    as: 'button',
    height: Button.sizes.large,
    fontSize: Button.sizes.large
};

Button.propTypes = {
    /** the HTML element to render */
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
    /** Props for the rendered element (gathered for convenience to separate them from Button props) */
    componentProps: PropTypes.object,
    /** small button */
    small: PropTypes.bool,
    /** primary button */
    primary: PropTypes.bool,
    /** secondary button */
    secondary: PropTypes.bool,
    /** outline button (white background) */
    outline: PropTypes.bool,
    /** full width button */
    full: PropTypes.bool,
    /** looks like a link (but renders a button) */
    asLink: PropTypes.bool,
    /** renders a Spinner if busy */
    isBusy: PropTypes.bool,
    /** Available heights */
    height: PropTypes.oneOf(Object.keys(Button.sizes).map(key => Button.sizes[key])),
    /** Available font sizes */
    fontSize: PropTypes.oneOf(Object.keys(Button.sizes).map(key => Button.sizes[key]))
};

export default Button;
