import React from 'react';
import resumePDF from '../../assets/resume.pdf';

function Resume() {
    return (
        <section>
            <h2>Resume</h2>
            <p>Creative thinker with a diverse background in the arts, technology, and data analysis.</p>
            <div className='skills-wrapper'>
                <h3>Front End Skills</h3>
                <ul>
                    <li>HTML5</li>
                    <li>CSS</li>
                    <li>Bootstrap</li>
                    <li>Bulma</li>
                    <li>SASS</li>
                    <li>JavaScript</li>
                    <li>JQuery</li>
                    <li>React</li>
                    <li>Handlebars</li>
                </ul>
                <h3>Back End Skills</h3>
                <ul>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>MySQL</li>
                    <li>Sequelize</li>
                    <li>MongoDB</li>
                    <li>Mongoose</li>
                </ul>
            </div>
            <div className="resume">
                <a href={resumePDF} download>Click here to download my resume</a>
                <a href={resumePDF}>Click here to view in browser</a>
            </div>
        </section>
    )
}

export default Resume;