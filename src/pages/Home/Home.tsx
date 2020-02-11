import React, { FunctionComponent } from 'react';

import { InfoSection } from '../../components/layout/InfoSection';
import Image from '../../components/Image';
import NextButton from '../../components/NextButton';
import Bio from './Bio';
import '../../stylesheets/Home.css';

const Home: FunctionComponent = () => {
    const bioPicUrl = 'http://www.dev.desiratech.com/images/team-member1.jpg';

    return (
        <div className="HomePage">
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
                        <p>He spends much of his free time in front of the PC creating and and furthering his knowledge about different technologies.</p>
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
            <NextButton
                linkUrl="/tech-summary"
                buttonLabel="Technical Summary"
                title="Technical Summary Button" />
        </div>
    );
}

export default Home;