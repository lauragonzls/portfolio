import React from 'react';
import './Home.css';

function Home() {
    return (
        <div className="text-center p-5">
            <nav>
                <div>
                    <img src="hamster.png" alt="Logo" className="logo" />
                </div>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/skills">Skills</a></li>
                </ul>
            </nav>
            <section className="home-section">
                <h1>Hi there!</h1>
                <h4 className='text-muted'>I'm Laura</h4>
                <h3 >System Engineer</h3>
                <button className='cv-button'>CV</button>
            </section>

        </div>
    );
}

export default Home;
