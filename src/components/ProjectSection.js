import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import Project from './Project';
import { projects } from '../projectData';

const ProjectSection = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <section id='projects' className='projects'>
      <h2 className={`projects__title ${theme}`}>My Portfolio Projects</h2>
      {projects.map((p) => (
        <Project
          key={p.id}
          id={p.id}
          title={p.title}
          image={p.image}
          webp={p.webp}
          description={p.description}
          tools={p.tools}
          link={p.link}
          github={p.github}
        />
      ))}
    </section>
  );
};

export default ProjectSection;
