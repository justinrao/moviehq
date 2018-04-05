import React, {Component} from 'react';
import {Box, Button, Container, Heading, Icon, IconButton, Text} from 'gestalt';
import AnswerResult from './AnswerResult';
import Header from './Header';

class Quiz extends Component {

  constructor() {
    super();
    this.state = {
      questions:
        [
          {
            category: "General Knowledge",
            type: "multiple",
            difficulty: "medium",
            question: "What is the world's most expensive spice by weight?",
            answers: [
              {text: "Saffron", correct: false},
              {text: "Cinnamon", correct: false},
              {text: "Cardamom", correct: true},
              {text: "Vanilla", correct: false}
            ]
          },
          {
            category: "General Knowledge",
            type: "multiple",
            question: "What does a milliner make and sell?",
            answers: [
              {text: "Hats", correct: false},
              {text: "Shoes", correct: false},
              {text: "Belts", correct: true},
              {text: "Shirts", correct: false}
            ]
          },
          {
            category: "General Knowledge",
            type: "multiple",
            question: "When was the Declaration of Independence approved by the Second Continental Congress?",
            answers: [
              {text: "July 2, 1776", correct: false},
              {text: "May 4, 1776", correct: false},
              {text: "June 4, 1776", correct: true},
              {text: "July 4, 1776", correct: false}
            ]
          }

        ],
      currentQuestionIndex: 0,
      score: 0
    };
  }

  onAnswerSelected = selectedIndex => {

    const currentQuestion = this.state.questions[this.state.currentQuestionIndex];

    let score = this.state.score;
    if (currentQuestion.answers[selectedIndex].correct) {
      score++;
    }

    this.setState((prevState) => ({
      ...prevState, selectedIndex, score
    }), () =>  {
      setTimeout(() => {
        this.setState((prevState) => ({
          ...prevState,
            currentQuestionIndex: prevState.currentQuestionIndex + 1,
            selectedIndex: null,
        }))
      }, 3000)
    });
  };

  renderQuestion = (question) => (
    <Box padding={3} height={600}>
      <Text mdSize>Question: {this.state.currentQuestionIndex + 1}/{this.state.questions.length}</Text>
      <Heading size="xs">{question.question}</Heading>

      {!this.state.selectedIndex && this.renderAnswers(question.answers)}
      {!!this.state.selectedIndex && <AnswerResult correct={true}/>}
    </Box>);

  renderAnswers = (answers) => {
    return answers.map((answer, index) => (
      <div style={{marginTop: 10}}>
        <Button text={answer.text} color={this.state.selectedIndex === index ? "red" : "gray"}
                onClick={() => this.onAnswerSelected(index)}/>
      </div>
    ))
  }

  render() {
    const question = this.state.questions[0];

    return (
      <Container>
        <Box maxWidth={600}>
          <Header score={this.state.score} totalQuestionCount={this.state.questions.length}/>
          {this.renderQuestion(question)}
        </Box>
      </Container>
    )
  }
}

export default Quiz;
