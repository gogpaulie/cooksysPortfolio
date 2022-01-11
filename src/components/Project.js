import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import Tilt from 'react-parallax-tilt';

const Project = ({
  title,
  image,
  webp,
  description,
  tools,
  github,
  link,
  id,
}) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className='project container'>
      <div
        className={id % 2 === 0 ? 'project__image order2' : 'project__image'}
      >
        <Tilt options={{ scale: 1, max: 15 }}>
          <a href={link} target='_blank' rel='noreferrer'>
            <picture>
              <source type='image/webp' srcSet={webp} />
              <source type='image/jpeg' srcSet={image} />
              <img src={image} alt={title} />
            </picture>
          </a>
        </Tilt>
      </div>
      <div className='project__info order1'>
        <h3 className={`project__info--title ${theme}`}>{title}</h3>
        <p className='project__info--desc'>{description}</p>
        <ul className='project__info--tools'>
          {tools.map((tool) => (
            <li className={`project__info--tools-badge ${theme}`} key={tool}>
              {tool}
            </li>
          ))}
        </ul>
        <div className='project__info--links'>
          <a
            className='project__info--links-github'
            target='_blank'
            rel='noreferrer'
            href={github}
          >
            <i className={`fab fa-github ${theme}`}></i>
            <p className={`${theme}`}>
              <span>&larr;</span> See Code
            </p>
          </a>
          {link ? (
            <a
              className='project__info--links-live'
              target='_blank'
              rel='noreferrer'
              href={link}
            >
              <i className={`fas fa-external-link-alt ${theme}`}></i>
              <p className={`${theme}`}>
                <span>&larr;</span> See Live
              </p>
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Project;
