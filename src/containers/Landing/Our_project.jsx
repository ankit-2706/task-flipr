import React, { useEffect, useState } from "react";

import "./Our_project.css";

const Our_project = () => {
  const [projects, setProjects] = useState([]);

  // Simulate fetching data from a backend
  useEffect(() => {
    const fetchProjects = async () => {
      // Dummy data simulating backend response
      const response = [
        {
          id: 1,
          
          image: "",
          name: "Consultation",
          description: "Project Name, Location",
        },
        {
          id: 2,
          image: "",
          name: "Design",
          description: "Project Name, Location",
        },
        {
          id: 3,
          image: "https://via.placeholder.com/300x200?text=Marketing+&+Design",
          name: "Marketing & Design",
          description: "Project Name, Location",
        },
        {
          id: 4,
          image: "https://via.placeholder.com/300x200?text=Consultation+&+Marketing",
          name: "Consultation & Marketing",
          description: "Project Name, Location",
        },
        {
          id: 5,
          image: "https://via.placeholder.com/300x200?text=Consultation",
          name: "Consultation",
          description: "Project Name, Location",
        },
      ];
      setProjects(response);
    };
    fetchProjects();
  }, []);

  return (
    <div className="app">
      <section className="our-projects">
        <h2>Our Projects</h2>
        <div className="project-container">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <img src={project.image} alt={project.name} />
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <button className="read-more">READ MORE</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Our_project;
