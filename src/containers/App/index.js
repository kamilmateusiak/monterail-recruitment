import React from 'react';
import { Route } from 'react-router-dom';
import QuestionsList from '../QuestionsList';
import SingleQuestion from '../SingleQuestion';
import UserProfile from '../UserProfile';
import styles from './style.css';

export default () => (
  <div className={styles.App}>
    <main className={styles.intro}>
      <Route exact path="/" component={QuestionsList} />
      <Route exact path="/question/:id" component={SingleQuestion} />
      <Route exact path="/profile" component={UserProfile} />
    </main>
  </div>
)
