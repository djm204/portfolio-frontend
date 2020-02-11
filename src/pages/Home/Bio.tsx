import React, { ReactNode } from 'react';

type BioProps = {
    children: ReactNode
}

const Bio = (props: BioProps) => {
    return (
        <div className="bio">
            <h2>Bio</h2>
            {props.children}
        </div>
    );
}

export default Bio;
