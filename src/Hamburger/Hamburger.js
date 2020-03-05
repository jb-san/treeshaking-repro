import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { config as reactSpringConfig } from 'react-spring';

import Animate from '../Animate/index.js';
import defaultTheme from '../defaultTheme';

const styles = ( theme ) => ({
    hamburger: {
        border: 'none',
        width: 40,
        height: 40,
        display: 'inline-flex',
        justifyContent: 'center',
        background: 'transparent',
        cursor: 'pointer'
    },
    barContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: 20,
        /* some adjustments when hamburger is active */
        transform: ({ isActive }) => (isActive ? 'translateX(5px)' : 'none'),
        transition: 'all 0.3s'
    },
    middleBar: {
        height: theme.borderWidths['4'] // need to set height here since Animate.fade is `position: relative`
    },
    barInner: {
        display: 'block',
        width: ({ isActive }) => (isActive ? 24.5 : 28),
        height: theme.borderWidths['4'],
        backgroundColor: ({ color }) => color,
        borderRadius: theme.borderRadius.full
    }
});

const Hamburger = ({ classes, isActive, onClick }) => {
    const Bar = () => <div className={classes.barInner} />;

    return (
        <button type={'button'} className={classes.hamburger} onClick={onClick}>
            <div className={classes.barContainer}>
                <Animate.rotate
                    isActive={isActive}
                    degrees={45}
                    transformOrigin={'top left'}
                    displayInline={false}
                    config={reactSpringConfig.stiff}
                >
                    <Bar />
                </Animate.rotate>
                <div className={classes.middleBar}>
                    <Animate.fade animateOnMount={false}>{!isActive ? <Bar /> : null}</Animate.fade>
                </div>
                <Animate.rotate
                    isActive={isActive}
                    degrees={45}
                    direction={'left'}
                    transformOrigin={'bottom left'}
                    displayInline={false}
                    config={reactSpringConfig.stiff}
                >
                    <Bar />
                </Animate.rotate>
            </div>
        </button>
    );
};

Hamburger.propTypes = {
    isActive: PropTypes.bool,
    onClick: PropTypes.func,
    color: PropTypes.oneOf(Object.keys(defaultTheme.colors).map(key => defaultTheme.colors[key]))
};
Hamburger.defaultProps = {
    color: defaultTheme.colors.link
};

export default injectSheet(styles, { inject: ['classes'] })(Hamburger);
