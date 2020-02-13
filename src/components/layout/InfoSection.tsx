import React, { FunctionComponent, ReactNode } from 'react';
import cnames from 'classnames';

type InfoSectionProps = {
    classnames?: Array<string> | string,
    id?: string,
    children: ReactNode
}

export const InfoSection: FunctionComponent<InfoSectionProps> = (props: InfoSectionProps) => {
    return (
        <div {...props} className={cnames('InfoSection', props.classnames)}>
            {props.children}
        </div>
    );
}

export default InfoSection;
