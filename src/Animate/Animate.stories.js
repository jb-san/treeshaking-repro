import React from 'react';
import { config as reactSpringConfig } from 'react-spring';

import StateComponent from '../../docs/components/StateComponent';
import {
    Animate,
    Button,
    VerticalSpacing,
    FormError,
    FormField,
    FormInputNumber,
    ExtendedDescription,
    List,
    Link,
    IconCaretRight,
    CardInfo,
    SiteHeaderResponsiveAnimated,
    B,
    IconClose,
    IconLock,
    Spacing,
    Headings,
    Badge,
    defaultTheme
} from '../../../';

export const Drop = () => (
    <>
        <VerticalSpacing>
            <StateComponent initialState={{ shouldRender: false }}>
                {({ setState, state: { shouldRender } }) => {
                    return (
                        <>
                            <Button small onClick={() => setState({ shouldRender: !shouldRender })}>
                                Drop a button
                            </Button>

                            <Animate.drop config={reactSpringConfig.wobbly}>
                                {shouldRender ? (
                                    <Spacing top={'md'}>
                                        <Button primary onClick={() => setState({ shouldRender: !shouldRender })}>
                                            this should have dropped now
                                        </Button>
                                    </Spacing>
                                ) : null}
                            </Animate.drop>
                        </>
                    );
                }}
            </StateComponent>
        </VerticalSpacing>
        <StateComponent initialState={{ shouldRender: false }}>
            {({ setState, state: { shouldRender } }) => {
                return (
                    <>
                        <Button small onClick={() => setState({ shouldRender: !shouldRender })}>
                            Drop a FormError
                        </Button>
                        <Animate.drop>
                            {shouldRender ? <FormError>this should have dropped now</FormError> : null}
                        </Animate.drop>
                    </>
                );
            }}
        </StateComponent>
    </>
);
export const Height = () => (
    <StateComponent initialState={{ shouldRenderOne: false, shouldRenderTwo: false }}>
        {({ setState, state: { shouldRenderOne, shouldRenderTwo } }) => {
            return (
                <>
                    <VerticalSpacing>
                        <Button small onClick={() => setState({ shouldRenderOne: !shouldRenderOne })}>
                            Render child component
                        </Button>
                    </VerticalSpacing>
                    <VerticalSpacing>
                        <Animate.height>
                            {shouldRenderOne ? <List list={'this should have height now'.split(' ')} /> : null}
                        </Animate.height>
                    </VerticalSpacing>

                    <VerticalSpacing>
                        <Button small onClick={() => setState({ shouldRenderTwo: !shouldRenderTwo })}>
                            Render child component
                        </Button>
                    </VerticalSpacing>
                    <Animate.height>
                        {shouldRenderTwo ? (
                            <ExtendedDescription id={'id-1'} linkText={'Click me'} isExpandable={true}>
                                <List list={'this should also have height now'.split(' ')} />
                            </ExtendedDescription>
                        ) : null}
                    </Animate.height>
                </>
            );
        }}
    </StateComponent>
);
export const Rotate = () => (
    <StateComponent initialState={{ isActive: false, degrees: 90 }}>
        {({ setState, state: { isActive, degrees } }) => {
            return (
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
                    <Spacing type={'margin'} right={'sm'} bottom={'sm'}>
                        <VerticalSpacing>
                            <Button small onClick={() => setState({ isActive: !isActive })}>
                                toggle isActive
                            </Button>
                        </VerticalSpacing>
                        <FormField
                            label={'degrees'}
                            component={FormInputNumber}
                            input={{
                                id: 'change-rotation',
                                onChange: e => setState({ degrees: e.target.value }),
                                value: degrees,
                                type: 'tel',
                                max: 10000,
                                step: 10
                            }}
                        />
                    </Spacing>
                    <Animate.rotate isActive={isActive} degrees={degrees}>
                        <IconCaretRight width={100} height={100} fill={defaultTheme.colors.primary1} />
                    </Animate.rotate>
                </div>
            );
        }}
    </StateComponent>
);
export const PopIn = () => (
    <StateComponent initialState={{ isActive: false }}>
        {({ setState, state: { isActive } }) => {
            return (
                <>
                    <VerticalSpacing>
                        <Button small onClick={() => setState({ isActive: !isActive })}>
                            toggle isActive
                        </Button>
                    </VerticalSpacing>
                    <Animate.popIn isActive={isActive}>
                        <div style={{ height: 10, width: 10, background: 'blue' }} />
                        <div style={{ height: 10, width: 10, background: 'red' }} />
                        <div style={{ height: 10, width: 10, background: 'green' }} />
                        <div style={{ height: 10, width: 10, background: 'yellow' }} />
                        <div style={{ height: 10, width: 10, background: 'hotpink' }} />
                    </Animate.popIn>
                </>
            );
        }}
    </StateComponent>
);
export const SlideIn = () => (
    <StateComponent initialState={{ isActive: false }}>
        {({ setState, state: { isActive } }) => {
            return (
                <>
                    <VerticalSpacing>
                        <Button small onClick={() => setState({ isActive: !isActive })}>
                            SlideIn
                        </Button>
                    </VerticalSpacing>
                    <Animate.slideIn isActive={isActive}>
                        {isActive && (
                            <CardInfo
                                heading={'Gosse djurförsäkring'}
                                subheading={'Fido'}
                                preheading={'2018-29-93'}
                                content={
                                    <List
                                        pdf
                                        list={[
                                            <Link to={'http://'}>Faktura</Link>,
                                            <Link to={'http://'}>Bilaga</Link>,
                                            <Link to={'http://'}>Försäkringsavtal</Link>
                                        ]}
                                    />
                                }
                                img={{ src: 'img/k_nalle_rgb_v4_green.svg', alt: '' }}
                            />
                        )}
                    </Animate.slideIn>
                </>
            );
        }}
    </StateComponent>
);
export const SlideDown = () => (
    <StateComponent initialState={{ isActive: false, margin: 0 }}>
        {({ setState, state: { isActive, margin } }) => {
            return (
                <>
                    <SiteHeaderResponsiveAnimated
                        isShown={isActive}
                        isFixedToTop
                        onResize={height => setState({ margin: height })}
                    >
                        <Link to={'/'}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <B>Stäng</B>
                                <IconClose
                                    width={14}
                                    height={14}
                                    style={{ marginLeft: 5, fill: defaultTheme.colors.link }}
                                />
                            </div>
                        </Link>
                        <Link to={'/'}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <B>Logga ut</B>
                                <IconLock
                                    width={14}
                                    height={14}
                                    style={{ marginLeft: 5, fill: defaultTheme.colors.link }}
                                />
                            </div>
                        </Link>
                    </SiteHeaderResponsiveAnimated>
                    <div style={{ marginTop: margin }}>
                        <Spacing top={'md'}>
                            <Button onClick={() => setState({ isActive: !isActive })}>{`Slide ${
                                isActive ? 'up' : 'down'
                            }`}</Button>
                        </Spacing>
                    </div>
                </>
            );
        }}
    </StateComponent>
);
export const Fade = () => (
    <StateComponent initialState={{ toggle: false, reveal: false }}>
        {({ setState, state: { toggle, reveal } }) => {
            return (
                <>
                    <Spacing bottom={'md'}>
                        <Spacing bottom={'md'}>
                            <Button onClick={() => setState({ toggle: !toggle })}>Toggle item</Button>
                        </Spacing>
                        <Spacing bottom={'md'}>
                            <Animate.fade>
                                {toggle ? <Headings.H1>{`Should fade ${toggle ? 'out' : 'in'}`}</Headings.H1> : null}
                                <Badge text={`Should fade in on mount`}></Badge>
                            </Animate.fade>
                        </Spacing>
                    </Spacing>
                    <Spacing bottom={'md'}>
                        <Button onClick={() => setState({ reveal: !reveal })}>Reveal item</Button>
                    </Spacing>
                    <Animate.fade>{reveal ? <Headings.H1>Single component reveal</Headings.H1> : null}</Animate.fade>
                </>
            );
        }}
    </StateComponent>
);

export default {
    title: 'Components|Animate',
    component: Animate,
    includeStories: []
};
