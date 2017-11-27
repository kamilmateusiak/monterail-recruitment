import React from 'react';
import questionsData from '../../data/questions.json';
import answersData from '../../data/answers.json';
import commentsData from '../../data/comments.json';
import QuestionsListComponent from '../../components/QuestionsList';
import SearchBar from '../../components/SearchBar';
import axios from 'axios';
import _ from 'lodash';

class QuestionsList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      questions: []
    };
  }
  
  componentDidMount () {
    axios.get('https://randomuser.me/api/?results=100')
      .then((response) => {
        var apiUsers = response.data.results;
        let listData = questionsData.map(question => {
          const apiUserIndex = Math.floor(Math.random()*(99-0+1)+0);
          
          let questionExtended = { ...question }
          questionExtended.author = apiUsers[apiUserIndex];

          questionExtended.activities = [];

          let questionAnswers = _.filter(answersData, ['questionId', question.id])

          _.each(questionAnswers, activity => {
            const apiUserIndex = Math.floor(Math.random()*(99-0+1)+0);
            activity.author = apiUsers[apiUserIndex];
            activity.type = 'answer';
            questionExtended.activities.push(activity)
          })

          let questionComments = _.filter(commentsData, ['questionId', question.id])
          
          _.each(questionComments, activity => {
            const apiUserIndex = Math.floor(Math.random()*(99-0+1)+0);
            activity.author = apiUsers[apiUserIndex];
            activity.type = 'comment';
            questionExtended.activities.push(activity)
          })

          return questionExtended;
        });
        this.setState({
          questions: listData
        });
      })

    
  }

  render () {
    return (
      <div>
          <SearchBar />
          <QuestionsListComponent questions={this.state.questions} />
      </div>
    )
  }
} 


export default QuestionsList;