import React from "react";
import "./Resume.css"; // Assuming you have a CSS file for styling


const Resume: React.FC = () => (
    <div className="resume-container">
        <header className="resume-header">
            <h1>Leonardo L. Rapanan Jr.</h1>
            <p>Email: raptrousmc@gmail.com | Phone: (425) 280-5152 | Location: 414 199th PL SW, Lynnwood Wa, 98036, United States</p>
            <p>
                <a href="https://www.linkedin.com/in/leonardo-l-rapanan-79759ba7/" target="_blank" rel="noopener noreferrer">LinkedIn</a> |{" "}
                <a href="https://github.com/rockyrapanan" target="_blank" rel="noopener noreferrer">GitHub</a>
            </p>
        </header>

        <section>
            <h2>Summary</h2>
            <p>
                An aspiring software engineer with a lot of experience making web apps that work
                 well on different devices and can grow as needed. I know how to use front-end 
                 technologies like HTML, CSS, React, and TypeScript. I also know how to use back-end 
                 technologies like Node.js, Python, C++, and C#. I love full-stack development,
                 writing clean code, and making user experiences easy to understand through smart design and architecture.
            </p>
        </section>

        <section>
            <h2>Skills</h2>
            <ul>
                <li>Languages: JavaScript, TypeScript, Python</li>
                <li>Frameworks: React, Node.js, Express</li>
                <li>Tools: Git, Docker, Webpack</li>
                <li>Other: REST APIs, SQL, Agile methodologies</li>
            </ul>
        </section>
        <section>
            <h2>Education</h2>
            <div>
                <h3>BAS. in Computer Science</h3>
                <p>University of Advancing Technology, 2022 – 2025</p>
            </div>
        </section>

        <section>
            <h2>Experience</h2>
            <div>
                <h3>Coding Temple – Software Engineering Bootcamp</h3>
                <p>Nov 2024 – Present</p>
                <ul>
                    <li>Developed and maintained web applications using React and TypeScript.</li>
                    <li>Collaborated with cross-functional teams to deliver high-quality products.</li>
                    <li>Implemented RESTful APIs and integrated third-party services.</li>
                </ul>
            </div>
            <div>
                <h3>Boeing – Aerospace</h3>
                <p>July 2019 – Present</p>
                <ul>
                    <li>Program Aerospace parts on CNC machines.</li>
                    <li>Collaborate with engineers to design and optimize manufacturing processes.</li>
                    <li>Ensure compliance with safety and quality standards.</li>

                </ul>
            </div>
        </section>

        
        <section>
            <h2>Projects</h2>
            <ul>
                
                <li>
                    <strong>E-commerce</strong> – An e-commerce application built with React and Node.js, featuring product listings, shopping cart functionality, and user authentication. Link: <a href="https://github.com/rockyrapanan/e-commerce-app.git" target="_blank" rel="noopener noreferrer">View Project</a>
                </li>
                
                <li>
                    <strong>Portfolio Website</strong> – A personal portfolio website showcasing my projects and skills, built with React and TypeScript. Link: <a href="https://github.com/rockyrapanan/portfolio" target="_blank" rel="noopener noreferrer">View Project</a>
                </li>   
                <li>
                    <strong>Fake Store App</strong> – A fake online store application that fetches data from a public API and displays product listings. Built with React and TypeScript. Link: <a href="https://github.com/rockyrapanan/Fake_Store_app.git" target="_blank" rel="noopener noreferrer">View Project</a>
                </li>
            </ul>
        </section>
    </div>
);

export default Resume;