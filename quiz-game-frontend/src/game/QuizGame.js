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

const QuizGame = (props) => {
   return <Panel>
      <GameTitle text="Quiz Game" />
      <hr/>
      <Question>
         How much wood could a woodchuck chuck?
      </Question>
      <Choices>
         <Choice><AnswerButton>A</AnswerButton>Good question. Any ideas?</Choice>
         <Choice><AnswerButton>B</AnswerButton>Three cords. If you know what a cord is...</Choice>
         <Choice><AnswerButton>C</AnswerButton>Socrates is a man, man is mortal, therefore Socrates is mortal...</Choice>
      </Choices>
   </Panel>;
};

export default QuizGame;
