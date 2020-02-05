import React, { FunctionComponent, ReactNode } from 'react';
import cnames from 'classnames';

type Props = {
    classnames?: Array<string>,
    children: ReactNode
}

export const InfoSection: FunctionComponent<Props> = (props: Props) => {
    return (
        <React.Fragment>
            <div className={cnames('info-section', props.classnames)}>
                {props.children}
            </div>
        </React.Fragment>
    );
}

export default InfoSection;
