import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Drop, Height, SlideDown, Rotate, Pulse, PopIn, Fade } from './animations/index.js';

const Animate = ({ animation: Animation, config, delay, onRest, onStart, keepChildrenInState, children, ...rest }) => {
    /**
     * If keepChildren in state is true, set children in state so we get to keep them in the Animate component
     * while animating away
     */
    const [stateChildren, setChildren] = useState(children);
    useEffect(() => {
        if (children && keepChildrenInState) {
            setChildren(children);
        }
    }, [children, keepChildrenInState]);

    return (
        <Animation config={config} delay={delay} onRest={onRest} onStart={onStart} {...rest}>
            {keepChildrenInState ? stateChildren : children || null}
        </Animation>
    );
};

Animate.propTypes = {
    animation: PropTypes.oneOfType([PropTypes.func, PropTypes.string]).isRequired,
    /**
     * Sets whether or not the children should be kept in state while animating away.
     */
    keepChildrenInState: PropTypes.bool,
    config: PropTypes.oneOfType([
        PropTypes.exact({
            container: PropTypes.shape({ tension: PropTypes.number.isRequired, friction: PropTypes.number.isRequired }),
            element: PropTypes.shape({ tension: PropTypes.number.isRequired, friction: PropTypes.number.isRequired })
        }),
        PropTypes.shape({ tension: PropTypes.number.isRequired, friction: PropTypes.number.isRequired })
    ]),
    /* Delay in ms before animation starts */
    delay: PropTypes.number,
    /* Called when animation starts */
    onStart: PropTypes.func,
    /* Called when animation comes to a stand-still */
    onRest: PropTypes.func,
    children: PropTypes.node
};
Animate.defaultProps = {
    keepChildrenInState: false
};


Animate.height = ({ children, ...rest }) => {
    return (
        <Animate animation={Height} shouldRender={!!children} keepChildrenInState={true} {...rest}>
            {children}
        </Animate>
    );
};

Animate.slideDown = ({ children, ...rest }) => {
    return (
        <Animate animation={SlideDown} {...rest}>
            {children}
        </Animate>
    );
};

Animate.drop = ({ children, ...rest }) => {
    return (
        <Animate animation={Drop} shouldRender={!!children} keepChildrenInState={true} {...rest}>
            {children}
        </Animate>
    );
};

Animate.rotate = ({ children, ...rest }) => (
    <Animate animation={Rotate} {...rest}>
        {children}
    </Animate>
);

Animate.pulse = ({ children, ...rest }) => (
    <Animate animation={Pulse} {...rest}>
        {children}
    </Animate>
);

Animate.popIn = ({ children, ...rest }) => (
    <Animate animation={PopIn} {...rest}>
        {children}
    </Animate>
);

Animate.fade = ({ children, ...rest }) => (
    <Animate animation={Fade} {...rest}>
        {children}
    </Animate>
);

export default Animate;
