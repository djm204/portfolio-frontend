import React from 'react';
import { InfoSection } from '../../components/layout/InfoSection';
import Image from '../../components/Image';
import Bio from './Bio';

type HomeProps = {
    bioPicUrl?: string
}

const Home = (props: HomeProps) => {
    return (
        <div className="home">
            <InfoSection>
                <div className="bio-wrapper">
                    <div className="image-and-brief">
                        <Image
                            imgClasses="bio-picture"
                            imgUrl={props.bioPicUrl || ''}
                            altText="David Mendez" />
                            <ul className="brief">
                                <li>
                                    Name: David Mendez
                                </li>
                                <li>
                                    
                                </li>
                            </ul>
                    </div>
                    <Bio bioText="look how awesome I am" />
                </div>
            </InfoSection>
        </div>
    );
}

export default Home;