import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSpring, animated, config as reactSpringConfig } from 'react-spring';
import Measure from 'react-measure';

const SlideDown = ({ children, isActive, offset, config }) => {
    const [elementHeight, setElementHeight] = useState(0);

    const [style, set] = useSpring(() => ({
        /* hide the element from the start, since it is hard to get its height without rendering it first */
        visibility: 'hidden',
        config
    }));

    useEffect(() => {
        set({
            to: isActive
                ? [{ visibility: 'visible' }, { transform: 'translateY(0px)' }]
                : [{ transform: `translateY(-${elementHeight + offset}px)` }, { visibility: 'hidden' }]
        });
    }, [set, elementHeight, offset, isActive]);

    return (
        <animated.div style={style}>
            <Measure client onResize={({ client: { height } }) => setElementHeight(height)}>
                {({ measureRef }) => <div ref={measureRef}>{children}</div>}
            </Measure>
        </animated.div>
    );
};

SlideDown.propTypes = {
    children: PropTypes.node,
    config: PropTypes.shape({ tension: PropTypes.number.isRequired, friction: PropTypes.number.isRequired }),
    isActive: PropTypes.bool.isRequired,
    /* The extra, or reduced distance the element should slide down from when active, handy to make sure that no box shadows drop down too far */
    offset: PropTypes.number
};
SlideDown.defaultProps = {
    config: reactSpringConfig.stiff,
    isActive: false,
    offset: 50
};
export default SlideDown;
