import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { default as React, useEffect, useState } from 'react';
import { Router } from 'react-router-dom';
import './App.css';
import Routes from './routes/index';
import catsService from './services/cats.service';
import history from './services/history';

const App = () => {
  const [isReady, setReady] = useState(false);

  useEffect(() => {
    catsService.load().then(() => {
      setReady(true);
    });
  }, []);

  return (
    (isReady ?
      (
        <Router history={history}>
          <Routes />
        </Router>
      )
      : (
        <div className="loading">
          <FontAwesomeIcon icon={faSpinner} spin size="10x" />
        </div>
      )
    )
  );
}

export default App;
