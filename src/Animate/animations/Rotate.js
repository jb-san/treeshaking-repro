import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSpring, animated, config as reactSpringConfig } from 'react-spring';

const Rotate = ({
    children,
    config,
    delay,
    onStart,
    onRest,
    direction,
    degrees,
    transformOrigin,
    displayInline,
    isActive
}) => {
    const directionPrefix = direction === 'left' ? '-' : '';
    const defaultStyle = {
        display: displayInline ? 'inline-flex' : 'block',
        transformOrigin
    };

    const [animatedStyle, set] = useSpring(() => ({
        transform: isActive ? `rotate(${directionPrefix}${degrees}deg)` : 'rotate(0deg)',
        config: config,
        onStart,
        onRest
    }));

    useEffect(() => {
        set({ transform: isActive ? `rotate(${directionPrefix}${degrees}deg)` : 'rotate(0deg)', delay });
    }, [isActive, degrees, delay, directionPrefix, set]);

    return <animated.div style={{ ...defaultStyle, ...animatedStyle }}>{children}</animated.div>;
};

Rotate.propTypes = {
    config: PropTypes.shape({ tension: PropTypes.number.isRequired, friction: PropTypes.number.isRequired }),
    /* Delay in ms before animation starts */
    delay: PropTypes.number,
    /* Called when animation comes to a stand-still */
    onRest: PropTypes.func,
    isActive: PropTypes.bool.isRequired,
    children: PropTypes.node,
    direction: PropTypes.oneOf(['right', 'left']),
    degrees: PropTypes.number,
    transformOrigin: PropTypes.string,
    displayInline: PropTypes.bool
};
Rotate.defaultProps = {
    direction: 'right',
    degrees: 90,
    transformOrigin: 'center',
    displayInline: true,
    config: reactSpringConfig.default,
    isActive: false,
    onRest: () => {}
};
export default Rotate;
