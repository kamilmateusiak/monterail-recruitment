import React from 'react'
import styles from './style.css'

const SearchBar = () => (
	<header className={styles.main}>
		<div className={styles.content}>
			<div className={styles.pull_left}>
				<h1 className={styles.title}>QUESTIONS</h1>
				<div className={styles.plus}>&#43;</div>
			</div>
			<div className={styles.pull_right}>
				<div className={styles.filters}>
					<div className={styles.single_filter}>
						<input type="radio" name="results" value="shelf"/> My shelf
					</div>
					<div className={styles.single_filter}>
						<input type="radio" name="results" value="questions"/> All questions
					</div>
				</div>
				<div className={styles.sortby}>
					<span>Sort by: </span>
					<span>recent </span> or
					<span> hor</span>
				</div>
			</div>
			<div className={styles.search}>
				<input placeholder="Search questions" className={styles.search_input} onChange={() => {console.log('bla')}} />
				<button className={styles.search_btn}>Search</button>
			</div>
		</div>
	</header>
)

export default SearchBar