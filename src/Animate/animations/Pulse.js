import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSpring, animated, config as reactSpringConfig } from 'react-spring';

const Pulse = ({ children, config, onStart, onRest, isActive }) => {
    const [testProps, set] = useSpring(() => ({
        transform: 'perspective(100px) translateZ(0px)',
        config,
        onStart,
        onRest
    }));
    useEffect(() => {
        set({
            transform: isActive ? `perspective(100px) translateZ(10px)` : 'perspective(100px) translateZ(0px)'
        });
    }, [isActive, set]);
    return <animated.div style={testProps}>{children}</animated.div>;
};

Pulse.propTypes = {
    children: PropTypes.node,
    config: PropTypes.shape({ tension: PropTypes.number.isRequired, friction: PropTypes.number.isRequired }),
    /* Called when animation starts */
    onStart: PropTypes.func,
    /* Called when animation comes to a stand-still */
    onRest: PropTypes.func,
    isActive: PropTypes.bool.isRequired
};
Pulse.defaultProps = {
    config: reactSpringConfig.wobbly,
    isActive: false
};
export default Pulse;
