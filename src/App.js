import { default as React, useEffect, useState } from 'react';
import { Router } from 'react-router-dom';
import './App.css';
import Routes from './routes/index';
import history from './services/history';
import catsService from './services/cats.service';

function App() {
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
      : (<div>Chargement...</div>)
    )
  );
}

export default App;
