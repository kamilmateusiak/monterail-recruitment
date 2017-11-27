import React from 'react'
import styles from './style.css'
import { Link } from 'react-router-dom'

const QuestionElement = ({data}) => (
	<article className={styles.container}>
		<main className={styles.content}>
			<header className={styles.header}>
				<div className={styles.avatar}>
					<img className={styles.avatar_picture} src={data.author.picture.thumbnail} alt='author' />
				</div>
				<div className={styles.header_info}>
					<p className={styles.author_name}><span>{data.author.name.first}</span> is asking</p>
					<Link className={styles.title} to={`/question/${data.id}`}><span>{data.title}</span></Link>
				</div>
			</header>
			<section className={styles.activities}>
				<div className={styles.author_activity}>
					<div className={styles.activity}>
						<div className={styles.activity_type}>Asked</div>
					</div>
				</div>
				<div className={styles.other_activities}>
					{ data.activities.map((activity, index) => {
						if (index < 5) {
							return (
								<div className={styles.activity} key={index}>
									<img className={`${styles.avatar_picture} ${styles.activity_avatar}`} src={activity.author.picture.thumbnail} alt="activity author" />
									<div className={styles.activity_type}>{activity.type === 'answer' ? 'Answered' : 'Commented'}</div>
									<div className={`${styles.activity_pointer} ${activity.type === 'answer' ? styles.activity_pointer_black : ''}`}></div>
								</div>
							)
						}
					}) }
					
				</div>
				<aside className={styles.sidebar}>
					<p>1 related discusion</p>
					<p>6 peers involved</p>
					<p>3 conversations</p>
				</aside>
			</section>
		</main>
	</article>
)

export default QuestionElement