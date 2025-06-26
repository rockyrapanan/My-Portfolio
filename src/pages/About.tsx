import React from 'react';
import './About.css'; // Assuming you have a CSS file for styling

const About: React.FC = () => {
    return (
        <div className="about-container" >
            <h1>About Me</h1>
            {/* Brief introduction about myself */}
            <p>
                Hello! I'm a passionate software developer with experience in building web applications using React, TypeScript, and other modern technologies. I enjoy solving complex problems and continuously learning new skills to improve my craft.
            </p>
            <h2>Skills</h2>
            {/* List of skills I currently possess */}
            <ul>
                <li>React & TypeScript</li>
                <li>JavaScript (ES6+)</li>
                <li>HTML & CSS</li>
                <li>Node.js</li>
                <li>REST APIs</li>
                <li>Python</li>
                <li>C++</li>    
                <li>C#</li>
                <li>SQL & NoSQL Databases</li>
                <li>Git & GitHub</li>
            </ul>
            <h2>Interests</h2>
            {/* My interests */}
            <p>
                In my free time, I enjoy working on cars, going on road trips with family during the summer, exploring new technologies, contributing to open source, and working on personal projects. I also like reading, hiking, and playing video games.
            </p>
        </div>
    );
};

export default About;