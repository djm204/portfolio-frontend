import React from 'react';

export type ContactInfoRowProps = {
    type: string,
    iconClass?: string,
    contactProfileUrl: string
}

export const ContactInfoRow = (props: ContactInfoRowProps) => {
    const { type, iconClass, contactProfileUrl } = props;
    return (
        <React.Fragment>
            <div>
                <i className={iconClass}></i>
                <a title={type} href={contactProfileUrl}>{contactProfileUrl}</a>
            </div>
        </React.Fragment>
    );
}
