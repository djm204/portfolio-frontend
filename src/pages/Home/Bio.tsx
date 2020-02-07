import React from 'react';

type BioProps = {
    bioText: string
}

const Bio = (props: BioProps) => {
    return (
        <div className="bio">
            {props.bioText}
        </div>
    );
}

export default Bio;
