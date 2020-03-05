import React from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const styles = (theme) => ({
    root: {
        position: 'relative',
        width: '20px',
        height: '20px'
    },
    fill: {
        position: 'absolute',
        borderRadius: '50%',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0'
    },
    ring: {
        border: `2px solid ${theme.colors.primary2}`,
        opacity: 0.3
    },
    tip: {
        border: '2px solid transparent',
        borderTopColor: theme.colors.primary2,
        animation: '$rotate 0.6s linear infinite'
    },
    inverted: {
        '& $ring': {
            borderColor: theme.colors.white
        },
        '& $tip': {
            borderTopColor: theme.colors.white
        }
    },
    large: {
        width: '30px',
        height: '30px',
        '& $ring, & $tip': {
            borderWidth: '3px'
        }
    },
    '@keyframes rotate': {
        to: {
            transform: 'rotate(360deg)'
        }
    }
});

const Spinner = ({ classes, inverted, large }) => (
    <div
        className={classNames(classes.root, {
            [classes.inverted]: inverted,
            [classes.large]: large
        })}
    >
        <span className={`${classes.fill} ${classes.ring}`} />
        <span className={`${classes.fill} ${classes.tip}`} />
    </div>
);

Spinner.propTypes = {
    /** Enable if you have a dark background */
    inverted: PropTypes.bool,
    /** Make the spinner slightly larger */
    large: PropTypes.bool
};

Spinner.defaultProps = {
    inverted: false,
    large: false
};

export default injectSheet(styles, { inject: ['classes'] })(Spinner);
