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

    const goToSection = (event:  React.MouseEvent<HTMLAnchorElement | MouseEvent>) => {
        event.preventDefault();
        const et = event.currentTarget as HTMLAnchorElement;
        const target = document.querySelector(`#${et.dataset.goto}`);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }

    return (
        <React.Fragment>
            <nav className={cnames('Nav', { 'Nav__Fixed': fixedNav })}>
                <a onClick={goToSection} href="/about" data-goto="About">About</a>
                <a onClick={goToSection} href="/tech-summary" data-goto="TechSummary">Tech Summary</a>
                <a onClick={goToSection} href="/projects" data-goto="Projects">Projects</a>
                <a onClick={goToSection} href="/contact" data-goto="Contact">Contact</a>
                <div className="EggBert">
                    <FontAwesomeIcon icon={'egg'} />
                </div>
            </nav>
        </React.Fragment>
    );
}

export default Navigation;
