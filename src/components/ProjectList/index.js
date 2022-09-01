import React, { useState } from 'react';
import Modal from '../Modal';

const ProjectList = ({ category }) => {

  const [projects] = useState([
    {
      name: 'SunnySide Up',
      link: 'https://philemonkirlles.github.io/SunnySide-Up/',
      description:
        'A weather app geared towards beachgoers, which includes information about water temperature and tides.'
    },
    {
      name: 'Dinos Are Birds',
      link: 'http://www.dinos-are-birds.fun/',
      description:
        'A game where a bird jumps over objects, based on the Google Dino Game. Also includes a database to store users and their scores.'
    },
    {
      name: 'Around Town',
      link: 'https://damp-cove-99714.herokuapp.com/',
      description:
        'A web site that allows users to post about and buy tickets to local events'
    },
    {
      name: 'Weather App',
      link: 'https://negativeh0ll0w/github.io/weather-app',
      description:
        'A weather dashboard that shows the forecast for the next five days'
    },
    {
      name: 'Coding Quiz',
      link: 'https://negativeh0ll0w.github.io/curly-fortnight/',
      description:
        'A timed quiz with questions about basic HTML and Javascript'
    },
    {
      name: 'Budget Tracker',
      link: 'https://github.com/negativeh0ll0w/budget-tracker-app',
      description:
        'A budget tracking app that graphs the users spending over time'
    }
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, i) => (
          <img
            src={require(`../../assets/images/${project.name}.png`).default}
            alt={project.name}
            className="img-thumbnail mx-1"
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
