import React, { FunctionComponent } from 'react';
import { IconName, IconPrefix, IconLookup } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export type SocialMediaRowProps = {
    type: string,
    iconClass: string,
    contactProfileUrl: string
}

export const SocialMediaRow: FunctionComponent<SocialMediaRowProps> = (props: SocialMediaRowProps) => {
    const { type, iconClass, contactProfileUrl } = props;
    const iconClasses = iconClass.indexOf(' ') > -1 ? iconClass.split(' ') : iconClass;

    return (
        <React.Fragment>
            <a title={type} href={contactProfileUrl}>
                <FontAwesomeIcon icon={iconClasses as IconName | [IconPrefix, IconName] | IconLookup} />
            </a>
        </React.Fragment>
    );
}
