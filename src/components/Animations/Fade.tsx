import * as React from 'react'
import Transition, { TransitionProps, TransitionActions, EndHandler, EnterHandler, ExitHandler } from 'react-transition-group/Transition';

export interface FadeProps extends TransitionActions {
    delay: number
    mountOnEnter?: boolean;
    unmountOnExit?: boolean;
    addEndListener?: EndHandler;
    onEnter?: EnterHandler;
    onEntering?: EnterHandler;
    onEntered?: EnterHandler;
    onExit?: ExitHandler;
    onExiting?: ExitHandler;
    onExited?: ExitHandler;
    [prop: string]: any;
}

const Fade = ({ delay, ...props }: FadeProps) => {
    const duration = 400
    const defaultStyle = {
        transition: `all ${duration}ms ease-in ${delay}ms`,
        opacity: 0.01,
    }
    const transitionStyles: { [k: string]: any } = {
        entering: { opacity: 1 },
        entered: { opacity: 1 }
    };

    return <Transition
        {...props}
        appear
        timeout={{ enter: 10, exit: duration + delay }}>
        {(state: any) => {
            return <div style={{
                ...defaultStyle,
                ...transitionStyles[state],
                ...props.style
            }}>
                {props.children}
            </div>
        }}
    </Transition>
};

export default Fade