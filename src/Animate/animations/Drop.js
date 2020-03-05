import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from 'react-jss';
import PropTypes from 'prop-types';
import Measure from 'react-measure';
import { useTransition, useChain, useSpring, animated, config as reactSpringConfig } from 'react-spring';

/**
 * Will animate a container down from behind any preceding siblings, then animate an element down into the space created
 */
const Drop = ({ children, shouldRender, config }) => {
    const theme = useTheme();
    const [elementHeight, setElementHeight] = useState(0);
    /* The container */
    const containerRef = useRef();
    const [containerStyle, setContainerStyle] = useSpring(() => ({
        /* set some padding to allow the element to bounce down without overflowing, negative margin to not affect surrounding styling */
        from: { overflow: 'hidden', marginBottom: `-${theme.margin.md}`, paddingBottom: theme.margin.md },
        config:
            config.container ||
            config /* use a single value config if container/element properties are not available */,
        ref: containerRef
    }));

    useEffect(() => {
        setContainerStyle({
            height: shouldRender ? elementHeight : 0
        });
    }, [setContainerStyle, shouldRender, elementHeight]);

    /* The element, using a transition of a single element https://www.react-spring.io/docs/hooks/use-transition */
    const elementRef = useRef();
    const elementTransition = useTransition(shouldRender, null, {
        from: { transform: `translateY(-${elementHeight + 100}px)` },
        enter: { transform: `translateY(0)` },
        leave: {
            transform: `translateY(-${elementHeight + 100}px)`
        },
        unique: true,
        config:
            config.element || config /* use a single value config if container/element properties are not available */,
        ref: elementRef
    });

    /* Workaround using refs to make the delay work, docs are a bit unclear https://github.com/react-spring/react-spring/issues/574 */
    useChain([{ current: containerRef.current }, { current: elementRef.current }], [children ? 0 : 0.2, 0]);

    return (
        <animated.div style={containerStyle}>
            {elementTransition &&
                elementTransition.map(({ item, key, props }) => {
                    return (
                        item && (
                            <animated.div key={key} style={props}>
                                <Measure client onResize={({ client: { height } }) => setElementHeight(height)}>
                                    {({ measureRef }) => <div ref={measureRef}>{children}</div>}
                                </Measure>
                            </animated.div>
                        )
                    );
                })}
        </animated.div>
    );
};

Drop.defaultProps = {
    config: {
        element: reactSpringConfig.stiff,
        container: reactSpringConfig.default
    }
};
Drop.propTypes = {
    shouldRender: PropTypes.bool.isRequired
};
export default Drop;
