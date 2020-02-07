import React, { FunctionComponent, ReactNode } from 'react';
import cnames from 'classnames';

type Props = {
    classnames?: Array<string> | string,
    children: ReactNode
}

export const InfoSection: FunctionComponent<Props> = (props: Props) => {
    return (
        <div className={cnames('info-section', props.classnames)}>
            {props.children}
        </div>
    );
}

export default InfoSection;
