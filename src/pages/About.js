import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const About = ({ githubData }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className='about'>
      <h1 className={`about__title ${theme}`}>About Me</h1>
      <div className='about__info-container'>
        <div className={`about__info-container--github-info`}>
          <img src={githubData.avatar_url} alt='profile' srcset='' />
          <h2 className={`${theme}`}>{githubData.name}</h2>
          <h3 className={`${theme}`}>
            <b>Hirable status:</b>{' '}
            {githubData.hireable ? 'Hirable' : 'Not Hirable'}
          </h3>
          <h3 className={`${theme}`}>
            <b>Bio:</b> {githubData.bio}
          </h3>
          <h3 className={`${theme}`}>
            <b>Programming:</b> Java, JavaScript, HTML5, CSS3, Sass, SQL,
            Spring, SpringBoot, JDBC, Jackson, JPA, JQuery, NodeJS, Webpack,
            Babel, Maven, NPM, React, Redux
          </h3>
          <h3 className={`${theme}`}>
            <b>Software:</b> Eclipse, IntenlliJ, VS Code, Git, GitHub, Cmder,
            PGAdmin, MongoDB Compass, Figma, Webflow
          </h3>
        </div>
        <div className='about__info-container--my-story'>
          <p>
            I'm originally from Idaho. I moved to Indianapolis, Indiana when I
            was 18 by myself to go to college to study accounting. During my
            time in college I was involved in some clubs that helped spread
            awareness of social issues and occasionally students would volunteer
            at non-profits. After a couple years of study Habitat for humanity
            approached me with a job opportunity I couldn't refuse.
          </p>
          <br />
          <p>
            I ended up working for them for 10 years. Habitat for Humanity
            shaped me into the person I am today. It taught me to be
            compassionate towards others and take pride in the work I do.
          </p>
          <br />
          <p>
            During my tenure at Habitat for Humanity I soon become the
            unofficial IT guy. If someone had a problem I was the person usually
            called upon to fix computer, internet, or printer problems. What
            really sparked my interest was my girlfriend needed a website to
            show off her art portfolio to get more commissions. Website builders
            just weren’t cutting it for the customization she wanted. I thought
            it would be a great birthday present to build her a website and get
            her a custom domain, so I took it upon myself to learn the basics.
            Once I started, I couldn’t stop. On evenings, weekends and during my
            PTO I would take online courses and learn as much as I could. I knew
            I found my calling.
          </p>
          <br />
          <p>
            My girlfriend and I recently moved to Denver, Colorado, so we've had
            a blast finding great hiking spots and enjoy the outdoors more. If
            we're not trail blazing we're usually cooking together or playing
            videos on the couch with our 2 twin brother black cats Simon and
            Garfunkel. One of my personal goals is to develop my own virtual
            reality game some day.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
