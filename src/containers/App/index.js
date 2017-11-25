import React from 'react';
import { Route } from 'react-router-dom'
import Home from '../Home'
import About from '../About'
import UserProfile from '../UserProfile'
import styles from './style.css'
import Navbar from '../../components/Navbar'

export default () => (
  <div className={styles.App}>
    <Navbar />
    <main className={styles.intro}>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
      <Route exact path="/profile" component={UserProfile} />
    </main>
  </div>
)
