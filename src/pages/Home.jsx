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
                <p>I'm Laura, a passionate web developer!</p>

            </section>

        </div>
    );
}

export default Home;
