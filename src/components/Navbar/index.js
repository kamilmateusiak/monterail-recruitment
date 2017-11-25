import React from 'react'
import { Link } from 'react-router-dom'
import styles from './style.css'

const Navbar = () => (
	<header className={styles.header}>
		<h1 className={styles.title}>HBA</h1>
		<Link className={styles.link} to="/">Home</Link>
		<Link className={styles.link} to="/about-us">About</Link>
		<Link className={styles.link} to="/profile">Profile</Link>
    </header>
)

export default Navbar