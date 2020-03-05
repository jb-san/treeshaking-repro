import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { useTransition, animated, config as reactSpringConfig } from 'react-spring';

const Fade = ({ children, animateOnMount, config }) => {
    const [isFirstRender, setIsFirstRender] = useState(true);

    useEffect(() => {
        setIsFirstRender(false);
    }, []);

    const visibleChildren = React.Children.toArray(children);
    const elementTransition = useTransition(visibleChildren, child => child.key, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0, position: 'absolute', right: 0, left: 0, bottom: 0, top: 0, zIndex: -1 },
        immediate: animateOnMount ? false : isFirstRender,
        config
    });

    return (
        <div style={{ position: 'relative' }}>
            {elementTransition.map(({ item, key, props }) => {
                return (
                    <animated.div key={key} style={props}>
                        {item}
                    </animated.div>
                );
            })}
        </div>
    );
};

Fade.propTypes = {
    children: PropTypes.node,
    /* sets the react-spring prop `immediate`, preventing animation on first render */
    animateOnMount: PropTypes.bool,
    config: PropTypes.shape({ tension: PropTypes.number.isRequired, friction: PropTypes.number.isRequired })
};
Fade.defaultProps = {
    config: reactSpringConfig.default,
    animateOnMount: true
};
export default Fade;
