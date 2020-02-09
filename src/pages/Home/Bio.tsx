import React, { ReactNode } from 'react';

type BioProps = {
    children: ReactNode
}

const Bio = (props: BioProps) => {
    return (
        <div className="bio">
            {props.children}
        </div>
    );
}

export default Bio;
