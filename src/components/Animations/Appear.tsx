import * as React from 'react'
import Transition, { TransitionProps, TransitionActions, EndHandler, EnterHandler, ExitHandler } from 'react-transition-group/Transition';

export interface AppearProps extends TransitionActions {
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

const Appear = ({ delay, ...props }: AppearProps) => {
    const duration = 250
    const defaultStyle = {
        transition: `all ${duration}ms ease-in-out ${delay}ms`
    }
    const transitionStyles: { [k: string]: any } = {
        entering: { opacity: 0.01, transform: "translateX(-1rem)" },
        entered: { opacity: 1, transform: "translateX(0)" },
        exiting: { opacity: 0.01, transform: "translateX(1rem)" },
        exited: { opacity: 0.01, transform: "translateX(1rem)" },
    };

    return <Transition
        {...props}
        appear
        timeout={{ enter: 10, exit: duration * 10 + delay }}>
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

export default Appear