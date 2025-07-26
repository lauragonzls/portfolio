import React from 'react';
import './Home.css';

function Home() {
    return (
        <div className="p-5">
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
                <div className='text-container'>
                    <div className="greeting">👋 Hey there!</div>
                    <h2>Laura Gonzalez </h2>
                    <h4>Fullstack developer</h4>
                    <div className="social-icons">
                        <button className="btn" onClick={() => window.open('https://www.linkedin.com/in/lauragonzalezsl/')}>
                            <img src="linkedin.png" alt="LinkedIn" />
                        </button>
                        <button className="btn" onClick={() => window.open('https://github.com/lauragonzls')}>
                            <img src="github.png" alt="GitHub" />
                        </button>
                    </div>
                </div>
                <div>
                    <img src="Profile.png" alt="Laura" className="profile-image" />
                </div>

            </section>

        </div>
    );
}

export default Home;
