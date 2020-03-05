import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from 'react-jss';
import Measure from 'react-measure';
import { animated, config as reactSpringConfig } from 'react-spring';
import { Spring } from 'react-spring/renderprops';

/**
 * Will animate element height
 */
const Height = ({
    children,
    shouldRender,
    onRest,
    onStart,
    config = shouldRender ? reactSpringConfig.default : { tension: 220, friction: 28 }
}) => {
    const theme = useTheme();
    const [elementHeight, setElementHeight] = useState(0);
    const [elementExtended, setElementExtended] = useState(false);

    const handleStart = () => {
        if (shouldRender) {
            setElementExtended(false);
        }
        return onStart();
    };
    const handleRest = ({ height }) => {
        if (height >= elementHeight) {
            setElementExtended(true);
        }
        return onRest();
    };

    const elementPadding = shouldRender ? theme.margin.lg : null;
    const elementMargin = shouldRender ? `-${theme.margin.lg}` : null;

    return (
        <Spring
            config={config}
            onRest={handleRest}
            onStart={handleStart}
            from={{
                height: 0
            }}
            to={{
                height: shouldRender ? elementHeight : 0
            }}
        >
            {styles => (
                <animated.div
                    style={{
                        position: 'relative',
                        /* positive padding/negative margin to show animated element's box shadows,
                         * leaving out the right side though since I don't know how to fix the resulting overflow
                         */
                        pointerEvents: 'none',
                        paddingTop: elementPadding,
                        paddingLeft: elementPadding,
                        paddingBottom: elementPadding,
                        marginTop: elementMargin,
                        marginLeft: elementMargin,
                        marginBottom: elementMargin,
                        overflow: shouldRender && elementExtended ? 'visible' : 'hidden',
                        ...styles
                    }}
                >
                    <Measure client onResize={({ client: { height } }) => setElementHeight(height)}>
                        {({ measureRef }) => (
                            <div style={{ pointerEvents: 'auto' }} ref={measureRef}>
                                {children}
                            </div>
                        )}
                    </Measure>
                </animated.div>
            )}
        </Spring>
    );
};

Height.propTypes = {
    component: PropTypes.oneOfType([PropTypes.func]),
    shouldRender: PropTypes.bool.isRequired,
    config: PropTypes.shape({ tension: PropTypes.number.isRequired, friction: PropTypes.number.isRequired }),
    children: PropTypes.node,
    onStart: PropTypes.func,
    onRest: PropTypes.func
};
Height.defaultProps = {
    onRest: () => {},
    onStart: () => {}
};

export default Height;
