import React, {Component} from 'react';
import AnswerButton from './widgets/AnswerButton';
import styled from 'styled-components';
import Panel from './widgets/Panel';

const GameTitle = (props) => {
  return <h1>{props.text}</h1>
};

const Question = styled.h2`
     font-weight: bold;
`;

const ChoicesUnstyled = (props)  => {
  return <ul className="">{ props.children }</ul>
};

const Choices = styled.ul`
     font-size: 2em;
     font-weight: lighter;
     list-style: none;
`;

const Choice = styled.li`
     color: #111;
`;

const QuizGame = ({question}) => {
  if (!question || !question.text) {
    return <p>No question yet...</p>;
  }
  const choices = question.choices.map(choice => {
    return (<Choice><AnswerButton>{ choice.key }</AnswerButton>{ choice.text }</Choice>)
  });
  return <Panel>
    <GameTitle text="Quiz Game" />
    <hr/>
    <Question>
      { question.text }
    </Question>
    { choices }
  </Panel>;
};

export default QuizGame;
