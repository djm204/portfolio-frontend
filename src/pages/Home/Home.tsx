import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { InfoSection } from '../../components/layout/InfoSection';
import Image from '../../components/Image';
import Bio from './Bio';

const Home: FunctionComponent = () => {
    const bioPicUrl = 'http://www.dev.desiratech.com/images/team-member1.jpg';

    return (
        <div className="home">
            <InfoSection>
                <div className="bio-wrapper">
                    <div className="image-and-brief">
                        <Image
                            imgClasses="bio-picture"
                            imgUrl={bioPicUrl || ''}
                            altText="David Mendez" />
                        <img src="images/team-member1.jpg" alt="David Mendez photo" />
                        <h4>David Mendez</h4>
                        <h5>Developer</h5>
                        <Bio>
                            <p>David is a life-long techy with an insatiable appetite for software development.</p>
                            <p>He spends much of his free time in front of the PC creating and and furthering his knowledge about different technologies.</p>
                            <p>Staying up to date with technology, code coverage and best practices are very important to David.</p>
                        </Bio>
                        <div className="favourite-quote">
                            <h4>Favourite Quote</h4>
                            <blockquote>
                                "Why settle for normalcy when there's a whole world of weird to explore?" - ???
                            </blockquote>
                        </div>
                    </div>
                </div>
            </InfoSection>
            <Link to='/tech-summary'>Technical Summary</Link>
        </div>
    );
}

export default Home;