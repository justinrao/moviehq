import React, {Component} from 'react';
import {Box, Button, Container, Heading, Icon, IconButton, Text} from 'gestalt';

const FinalScore = ({score, totalQuestionCount}) => (

  <Box display="flex" direction="vertical" alignItems="center" justifyContent="center" height={300}>

    <Heading size="lg">Your Final Score:</Heading>
    <Heading size="xl">Score: {score}/{totalQuestionCount}</Heading>
  </Box>
);

export default FinalScore;
