import React from 'react';
import cnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName, IconPrefix, IconLookup } from '@fortawesome/fontawesome-svg-core';
import { Link } from 'react-router-dom';

type NextButtonProps = {
    linkUrl: string,
    classnames?: Array<string> | string,
    title?: string,
    buttonLabel: string
}

const NextButton = (props: NextButtonProps) => {
    const { linkUrl, classnames, title, buttonLabel } = props;
    const iconClass: Array<string> | string = ['fa', 'fa-chevron-right'];
    
    return (
        <div className={cnames("next-button", classnames)}>
            <Link title={title} to={linkUrl}>{buttonLabel}<FontAwesomeIcon icon={iconClass as IconName | [IconPrefix, IconName] | IconLookup} /> </Link>
        </div>
    );
}

export default NextButton;
