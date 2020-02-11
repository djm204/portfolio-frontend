import React, { MouseEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Stars = () => {
    const goToBio = (event: MouseEvent) => {
        event.preventDefault();
        const homePage = document.getElementById("HomePage");
        if (homePage) {
            homePage.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }
    return (
        <React.Fragment>
            <div className='stars'></div>
            <div className='stars2'></div>
            <div className='stars3'></div>
            <div className='title'>
                <span className="hello">
                    Hello, I'm David Mendez.
                </span>
                <div>
                    a full-stack Web Developer.
                </div>
                <div className="CheckMe" onClick={goToBio}>Check out my work <FontAwesomeIcon className="CheckMe__Arrow" icon="arrow-alt-down" /></div>
            </div>
        </React.Fragment>
    )
}

export default Stars;
