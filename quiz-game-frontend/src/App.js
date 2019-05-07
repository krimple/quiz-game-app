import React, { Component } from 'react';
import './App.css';
import {subscribeToQuestionStream} from './graphql/game-api';
import QuizGame from './game/QuizGame';

export default class App extends Component {
  // to hold the subscription reference. Not something we need to store in state
  // as it is transient and controlled by ZenObservable and the GraphQL API
  subscription = undefined;

  state = {
    question: {},
    subscription: undefined
  };

  componentDidMount() {
     this.subscription = subscribeToQuestionStream(
       (question) => this.setState({ question }),
       (error) => alert('A piper is down...'),
       () => alert('we\'re done here...')
     );
  }

  componentWillUnmount() {
    this.subscription.disconnect();
  }

  render() {
    return (
      <div className="App">
        <QuizGame question={this.state.question} />
     </div>
    );
  }
}

