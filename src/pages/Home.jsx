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
                <div className='card-container col-1 gap-3'>
                    {cardData("Web Developer", "Web.svg", "rgb(10, 1, 30)")}
                    {cardData("2 years of Experience", "Experience.svg")}

                </div>

            </section>
            <div className='line'></div>
            <section className='gap-3'>
                <h3 className='c-title'>About Me</h3>
                <div className='about-container'>
                    <p>I’m a Systems Engineer with hands-on experience in fullstack development, particularly in building web applications that integrate cloud services, API communication, and user-friendly interfaces. I’ve worked on projects involving digital platforms, internal tools, authentication systems, and real-time interfaces using Svelte and .NET, always with a focus on clean architecture and usability. Passionate about creating meaningful digital solutions that enhance user experience and drive operational efficiency.</p>
                </div>
            </section>
            <div className='line'></div>
            <section className='gap-3'>
                <h3 className='c-title'>Skills</h3>
                <Skills />
            </section>

        </div>
    );
}

function cardData(text, img, bg) {
    return (
        <button className='btn-card' style={{ backgroundColor: `${bg}` }}>
            <img src={img} alt="Card Icon" className="card-icon" />
            <h4>{text}</h4>
        </button>
    );
}
function Skills() {
    return (
        <div>
            <div className="d-flex flex-wrap gap-2 p-3">
                {["React", "Node.js", "JavaScript", "Python", "SQL", "HTML", "CSS", "Git", "REST APIs", "Agile Development"].map(skill => (
                    <div key={skill} className="badge bg-gradient-to-b text-light px-3 py-2">
                        {skill}
                    </div>
                ))}
            </div>

        </div>
    );
}

export default Home;
