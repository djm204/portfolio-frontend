import React from 'react';
import {  IconName, IconPrefix, IconLookup } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export type ContactInfoRowProps = {
    type: string,
    iconClass: string,
    contactProfileUrl: string
}

export const ContactInfoRow = (props: ContactInfoRowProps) => {
    const { type, iconClass, contactProfileUrl } = props;
    const iconClasses = iconClass.indexOf(' ') > -1 ? iconClass.split(' ') : iconClass;

    return (
        <React.Fragment>
            <div>
                <FontAwesomeIcon icon={iconClasses as IconName | [IconPrefix, IconName] | IconLookup} />
                <a title={type} href={contactProfileUrl}>{type.charAt(0).toUpperCase() + type.slice(1)}</a>
            </div>
        </React.Fragment>
    );
}
