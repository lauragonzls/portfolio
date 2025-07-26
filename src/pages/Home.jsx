import React from 'react';
import './Home.css';

function Home() {
    return (
        <div className="text-center p-5">
            <nav>
                <div>
                    <img src="Logo.png" alt="Logo" className="logo" />
                </div>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/skills">Skills</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>
            </nav>
            <section className="home-section">
                <div>
                    <div className="greeting">👋 Hey there!</div>
                    <h2>Laura Gonzalez </h2>
                    <h4>Fullstack developer</h4>
                    <button className='cv-button'>CV</button>
                </div>
                <div>
                    <img src="Profile.png" alt="Laura" className="profile-image" />
                </div>

            </section>

        </div>
    );
}

export default Home;
