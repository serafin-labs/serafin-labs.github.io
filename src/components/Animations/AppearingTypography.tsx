import * as React from 'react'
import Typography from 'material-ui/Typography/Typography';
import { TypographyProps } from 'material-ui/Typography';
import { TransitionGroup } from 'react-transition-group';
import Appear from './Appear';

const AppearingTypography = ({ delay, key, ...props }: TypographyProps & { delay: number, key?: string }) => {
    return <TransitionGroup>
        <Appear in key={key} delay={delay}>
            <Typography {...props} />
        </Appear>
    </TransitionGroup>
};

export default AppearingTypography