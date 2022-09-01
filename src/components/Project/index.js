import React from 'react';

function Project(props) {
    const { name, link, image } = props;

    return (
        <div className="portfolio">
            <h2>{name}</h2>
            <a href={link} target="_blank">
                <img src={image} alt="screenshot of project" />
            </a>
        </div>
    )
}

export default Project;