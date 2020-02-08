import React, { FunctionComponent, ReactNode } from 'react';
import cnames from 'classnames';

type InfoSectionProps = {
    classnames?: Array<string> | string,
    children: ReactNode
}

export const InfoSection: FunctionComponent<InfoSectionProps> = (props: InfoSectionProps) => {
    return (
        <div className={cnames('info-section', props.classnames)}>
            {props.children}
        </div>
    );
}

export default InfoSection;
