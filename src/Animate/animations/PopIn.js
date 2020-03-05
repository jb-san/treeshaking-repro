import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTrail, animated, config as reactSpringConfig } from 'react-spring';

const PopIn = ({ children, config, delay, onStart, onRest, isActive }) => {
    const baseStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    };
    const [springs, set] = useTrail(children.length, () => ({
        transform: 'perspective(100px) translateZ(-800px)',
        opacity: 0,
        config,
        onStart,
        onRest
    }));
    useEffect(() => {
        set({
            transform: isActive ? 'perspective(100px) translateZ(0px)' : 'perspective(100px) translateZ(-800px)',
            opacity: isActive ? 1 : 0,
            delay
        });
    }, [set, isActive, delay]);

    return (
        <>
            {springs.map((animatedStyle, idx) => (
                <animated.div
                    style={{ ...baseStyle, ...animatedStyle }}
                    key={idx}
                    children={children.length > 0 ? children[idx] : children}
                />
            ))}
        </>
    );
};

PopIn.propTypes = {
    children: PropTypes.node,
    config: PropTypes.shape({ tension: PropTypes.number.isRequired, friction: PropTypes.number.isRequired }),
    /* Delay in ms before animation starts */
    delay: PropTypes.number,
    /* Called when animation starts */
    onStart: PropTypes.func,
    /* Called when animation comes to a stand-still */
    onRest: PropTypes.func,
    isActive: PropTypes.bool.isRequired
};
PopIn.defaultProps = {
    config: reactSpringConfig.default,
    isActive: false
};
export default PopIn;
