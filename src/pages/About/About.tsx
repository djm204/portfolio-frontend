import React, { FunctionComponent } from 'react';

import { InfoSection } from '../../components/layout/InfoSection';
import Image from '../../components/Image';
import Bio from './Bio';
import '../../stylesheets/About.css';

const Home: FunctionComponent = () => {
    const bioPicUrl = 'david_on_a_mountain.jpg';

    return (
        <div
            id="About" 
            className="About"
            data-aos="fade-in"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            data-aos-duration="1000">
            <InfoSection classnames="Bio">
                <div className="Bio__Image">
                    <Image
                        imgClasses="Bio__Image__Picture"
                        imgUrl={bioPicUrl || ''}
                        altText="David Mendez" />
                    <h4>David Mendez</h4>
                    <h5>Developer</h5>
                </div>
                <div className="Bio__AndQuote">
                    <Bio>
                        <p>David is a life-long techy with an insatiable appetite for software development.</p>
                        <p>He spends much of his free time in front of the PC creating and furthering his knowledge about different technologies such as JavaScript, GoLang and Python.</p>
                        <p>Staying up to date with technology, code coverage and best practices are very important to David.</p>
                    </Bio>
                    <div className="Quote">
                        <h4>Favourite Quote</h4>
                        <blockquote>
                            "Why settle for normalcy when there's a whole world of weird to explore?"
                        </blockquote>
                    </div>
                </div>
            </InfoSection>
        </div>
    );
}

export default Home;