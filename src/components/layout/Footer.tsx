import React, { useState, useEffect, FunctionComponent } from 'react';
import { SocialMediaRow, SocialMediaRowProps } from '../SocialMedia';
import { get } from '../../helpers/api';
import '../../stylesheets/Footer.css';

const Footer: FunctionComponent = () => {
    const [contactInfo, setContactInfo] = useState();

    //ComponentDidMount
    useEffect(() => {
        get({ url: '/contactInfo' })
            .then(contactInfo => setContactInfo(contactInfo))
            .catch((err: any) => console.error(err));
    }, []);
    
    return (
        <footer>
            <div className="SocialMedia__Wrapper">
                {contactInfo ?
                    contactInfo.map((contact: SocialMediaRowProps) => <SocialMediaRow key={JSON.stringify(contact)} {...contact} />) :
                    null}
            </div>
            <div>&copy; David Mendez  2010 - {new Date().getFullYear()}</div>
        </footer>
    );
}

export default Footer;
