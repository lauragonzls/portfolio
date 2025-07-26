import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faDatabase } from '@fortawesome/free-solid-svg-icons'
import { faReact, faJs, faGitAlt } from '@fortawesome/free-brands-svg-icons'
import './Skills.css';

function Skills() {
    return (
        <div className="skills-container text-center">
            <h1 className='text-4xl font-bold mb-6'>Skills</h1>
            <div className="skills-grid">
                <div className="skill"><FontAwesomeIcon icon={faReact} /> React</div>
                <div className="skill"><FontAwesomeIcon icon={faJs} /> JavaScript</div>
                <div className="skill"><FontAwesomeIcon icon={faCode} /> C#</div>
                <div className="skill"><FontAwesomeIcon icon={faDatabase} /> SQL</div>
                <div className="skill"><FontAwesomeIcon icon={faGitAlt} /> Git</div>
                <div className="skill"><FontAwesomeIcon icon={faCode} /> Svelte</div>
            </div>
        </div>
    );
}

export default Skills;