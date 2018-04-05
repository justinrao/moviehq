import React, {Component} from 'react';
import {Box, Button, Container, Heading, Text} from 'gestalt';
import AnswerResult from './AnswerResult';
import Header from './Header';
import {QUESTIONS_2} from '../services/questions_only2';
import {QUESTIONS} from '../services/questions';
import FinalScore from './FinalScore';

class Quiz extends Component {

  constructor() {
    super();
    this.state = {
      questions: QUESTIONS,
      currentQuestionIndex: 0,
      score: 0,
      done: false
    };
  }

  onAnswerSelected = selectedIndex => {

    const currentQuestion = this.state.questions[this.state.currentQuestionIndex];

    let score = this.state.score;
    if (currentQuestion.options[selectedIndex].answer) {
      score++;
    }

    this.setState((prevState) => ({
      ...prevState, selectedIndex, score
    }), () => {
      setTimeout(() => {

        const done = this.state.currentQuestionIndex + 1 === this.state.questions.length;

        this.setState((prevState) => ({
          ...prevState,
          currentQuestionIndex: done ? prevState.currentQuestionIndex : prevState.currentQuestionIndex + 1,
          selectedIndex: null,
          done: done
        }))
      }, 2000)
    });
  };


  renderQuestion = () => {
    const question = this.state.questions[this.state.currentQuestionIndex];

    return (

       !this.state.done ?
      <Box padding={3} height={600}>
        <Text mdSize>Question: {this.state.currentQuestionIndex + 1}/{this.state.questions.length}</Text>
        <Heading size="xs">{question.question}</Heading>

        {this.state.selectedIndex == null ? this.renderOptions(question.options) :
          <AnswerResult correct = {question.options[this.state.selectedIndex].answer}/>
        }
      </Box> :
      <FinalScore score={this.state.score} totalQuestionCount={this.state.questions.length}/>);
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

    return (
      <Container>
        <Box maxWidth={600}>
          <Header score={this.state.score} totalQuestionCount={this.state.questions.length}/>
          {this.renderQuestion()}
        </Box>
      </Container>
    )
  }
}

export default Quiz;
