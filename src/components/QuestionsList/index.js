import React from 'react'
import styles from './style.css'
import QuestionElement from '../QuestionElement'

const QuestionsList = ({questions}) => (
	<div className={styles.container}>
		<main className={styles.wrapper}>
			{
			questions.map((question) => <QuestionElement key={question.id} data={question}/>)
			}
		</main>
	</div>
	
)

export default QuestionsList