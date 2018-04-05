import React, {Component} from 'react';
import {Box, Button, Container, Heading, Text} from 'gestalt';
import AnswerResult from './AnswerResult';
import Header from './Header';
import {QUESTIONS} from '../services/questions';

class Quiz extends Component {

  constructor() {
    super();
    this.state = {
      questions: QUESTIONS,
      currentQuestionIndex: 0,
      score: 0
    };
  }

  onAnswerSelected = selectedIndex => {

    const currentQuestion = this.state.questions[this.state.currentQuestionIndex];

    let score = this.state.score;
    if (currentQuestion.options[selectedIndex].answer) {
      score++;
    }

    const lastQuestion = this.state.currentQuestionIndex === this.state.questions.length;

    this.setState((prevState) => ({
      ...prevState, selectedIndex, score
    }), () => {
      setTimeout(() => {

        // newQuestionIndex =
        this.setState((prevState) => ({
          ...prevState,
          currentQuestionIndex: prevState.currentQuestionIndex + 1,
          selectedIndex: null,
        }))
      }, 2000)
    });
  };

  renderQuestion = (question) => {
    const currentQuestion = this.state.questions[this.state.currentQuestionIndex];

    return (

      <Box padding={3} height={600}>
        <Text mdSize>Question: {this.state.currentQuestionIndex + 1}/{this.state.questions.length}</Text>
        <Heading size="xs">{question.question}</Heading>

        {this.state.selectedIndex == null ? this.renderOptions(question.options) :
          <AnswerResult correct = {currentQuestion.options[this.state.selectedIndex].answer}/>
        }
      </Box>);
  }

  renderOptions = (options) => {
    return options.map((option, index) => (
      <div style={{marginTop: 10}}>
        <Button text={option.title} color={this.state.selectedIndex === index ? "red" : "gray"}
                onClick={() => this.onAnswerSelected(index)}/>
      </div>
    ))
  };

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
