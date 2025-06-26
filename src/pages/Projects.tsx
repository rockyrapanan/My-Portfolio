import React, { useState } from 'react';
import './Projects.css';
import ecommerceVideo from '../Video/ecommerce-demo.mp4'; // Example video import
import todoVideo from '../Video/taskManagement.mp4'; // Example video import
import ReactQuiz from '../Video/ReacT_Quiz.mp4'; // Example video import
import ecommerce1 from '../images/ecommerce1.png';
import ecommerce2 from '../images/ecommerce2.png';
import ecommerce3 from '../images/ecommerce3.png';
import todo1 from '../images/todo1.png';
import todo2 from '../images/todo2.png';
import todo3 from '../images/todo3.png';
import Quiz1 from '../images/Quiz1.png';
import Quiz2 from '../images/Quiz2.png';  
import Quiz3 from '../images/Quiz3.png';


const projects = [
  {
    title: 'E-commerce Website',
    description: 'A scalable and responsive e-commerce platform built with React, TypeScript, and Redux Toolkit. Features include product listing, shopping cart functionality, checkout flow, and integration with Firebase for authentication and Firestore for product data storage',
    link: 'https://github.com/rockyrapanan/e-commerce-app.git',
    images: [
      ecommerce1, ecommerce2, ecommerce3
    ],
    video: ecommerceVideo,
  },
  {
    title: 'React Quiz',
    description: 'An interactive quiz application built with React. This project features timed questions, multiple-choice answers, and dynamic score tracking. It demonstrates component-based UI structure, state management with hooks, and clean styling.',
    link: 'https://github.com/rockyrapanan/React_Quiz.git',
    images: [
      Quiz1, Quiz2, Quiz3
    ],

    video: ReactQuiz,
  },
  {
    title: 'Todo List App',
    description: 'A simple command-line To-Do List application built with Python. Users can add, view, and delete tasks. Each task includes timestamps for when it was created or removed. This project demonstrates object-oriented design, file handling, and basic user interaction.',
    link: 'https://github.com/rockyrapanan/todo-list.git',
    images: [
      todo1, todo2, todo3
    ],
    video: todoVideo, 
  },
];

const Projects: React.FC = () => {
  const [modalMedia, setModalMedia] = useState<string | null>(null);
  const [isVideo, setIsVideo] = useState(false);

  const openModal = (src: string, video = false) => {
    setModalMedia(src);
    setIsVideo(video);
  };

  const closeModal = () => {
    setModalMedia(null);
    setIsVideo(false);
  };

  return (
    <div className="projects-container">
      <h1>Projects</h1>
      <div className="projects-grid">
        {projects.map((project, idx) => (
          <div key={idx} className="project-card">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>

            <div className="media-grid">
              {project.images?.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${project.title} ${i + 1}`}
                  className="preview-thumb"
                  onClick={() => openModal(img)}
                />
              ))}

              {project.video && (
                <div
                  className="video-thumb"
                  onClick={() => openModal(project.video, true)}
                >
                  ▶ Watch Demo
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {modalMedia && (
        <div className="modal-backdrop" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            {isVideo ? (
              <iframe
                width="100%"
                height="400"
                src={modalMedia}
                title="Video preview"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <img src={modalMedia} alt="Preview" className="modal-image" />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;