import React, {Component} from 'react';
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

const Button = styled.button`
  font-size: 2em;
  font-family: Courier New,serif;
  background-color:#fff;
  border: 1px solid black;
  margin: .1em;
`;

const QuizGame = (props) => {
   return <Panel>
      <GameTitle text="Quiz Game" />
      <hr/>
      <Question>
         How much wood could a woodchuck chuck?
      </Question>
      <Choices>
         <Choice><Button>A</Button>Good question. Any ideas?</Choice>
         <Choice><Button>B</Button>Three cords. If you know what a cord is...</Choice>
         <Choice><Button>C</Button>Socrates is a man, man is mortal, therefore Socrates is mortal...</Choice>
      </Choices>
   </Panel>;
};

export default QuizGame;
