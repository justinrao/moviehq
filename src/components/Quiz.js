import React, {Component} from 'react';
import {Box, Button, Container, Heading, Icon, IconButton, Text} from 'gestalt';

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

        ]
    };
  }

  onAnswerSelected = selectedIndex => {
    this.setState((prevState) => ({
      ...prevState,
      selectedIndex: selectedIndex
    }))
    console.log(selectedIndex);
  };


  render() {

    const question = this.state.questions[0];
    return (

      <Container>
        <Box maxWidth={600}>

          <Box color="white" shape="rounded" padding={3} display="flex" direction="row" alignItems="center">
            <Box padding={3}>
              <Icon
                color="red"
                icon="globe"
                size={20}
                accessibilityLabel="moviepin">
              </Icon>
            </Box>
            <Box flex="grow" paddingX={2} justifyContent="center" alignContent="center">
              <Heading size="xs" color="red">Movie HQ</Heading>
            </Box>
            <Box paddingX={2}>
              <IconButton accessibilityLabel="Profile" icon="person" size="md"/>
            </Box>
          </Box>
          <Box padding={3}>
            <Heading size="xs">{question.question}</Heading>

            {question.answers.map((answer, index) => (
              <div style={{marginTop: 10}}>
                <Button text={answer.text} color={this.state.selectedIndex === index ? "red" : "gray"}
                        onClick={() => this.onAnswerSelected(index)}/>
              </div>
            ))}
          </Box>

        </Box>
      </Container>
    )
  }
}

export default Quiz;
