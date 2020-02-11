import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cnames from 'classnames';
import '../stylesheets/Egg.css';


const Navigation = () => {
    const [fixedNav, setFixedNav] = useState();

    window.addEventListener('scroll', () => {
        if(window.scrollY > window.innerHeight-20 && !fixedNav) {
            setFixedNav(true);
        }
        
        if(window.scrollY < window.innerHeight-20 && fixedNav){
            setFixedNav(false);
        }
    });

    return (
        <React.Fragment>
            <nav className={cnames('Nav', { 'Nav__Fixed': fixedNav })}>
                <a href="/">Home</a>
                <a href="/tech-summary">Tech Summary</a>
                <a href="/contact">Contact</a>
                <div className="EggBert">
                    <FontAwesomeIcon icon={'egg'} />
                </div>
            </nav>
        </React.Fragment>
    );
}

export default Navigation;
