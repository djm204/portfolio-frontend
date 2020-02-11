import React from 'react';
import cnames from 'classnames';

type ProjectProps = {
    name: string,
    points: Array<string> | string,
    role: string,
    className: string,
    dataAos?: string,
    dataAosDuration?: string,
    dataAosEasing?: string,
    dataAosOnce?: string
}

const Project = (props: ProjectProps) => {
    const { role, name, points, className, dataAos, dataAosDuration, dataAosEasing, dataAosOnce } = props;

    return (
        <div className={cnames("Project", className)}
            data-aos={dataAos}
            data-aos-duration={dataAosDuration}
            data-aos-easing={dataAosEasing}
            data-aos-once={dataAosOnce}
        >
            <h3>{name}</h3>
            <div>{role}</div>
            <ul>
                {typeof points !== 'string' ?
                    points.map(point => <li key={point}>{point}</li>) :
                    <li>{points}</li>}
            </ul>
            <div className="Project__Picture"></div>
        </div>
    );
}

export default Project;
