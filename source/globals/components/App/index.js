import React from 'react';
import styles from './style.scss';
import { HashRouter as Router, Link } from 'react-router-dom';
import Route from '../Route';

import { routes } from '../../../kernel';

const App = () => <div className={styles.main}>
  <h1>Test utilizing different modules</h1>
  <Router>
    <div>
      <Link to="/module-a">Module A</Link>, <Link to="/module-a/test-route">Module A Nesting</Link>, <Link to="/module-b">Module B</Link>
      {routes.map((route, i) => <Route key={i} {...route} />)}
    </div>
  </Router>
</div>;

export default App;