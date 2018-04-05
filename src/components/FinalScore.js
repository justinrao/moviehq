import React from 'react';
import {Box, Heading} from 'gestalt';

const FinalScore = ({score, totalQuestionCount}) => (

  <Box display="flex" direction="column" alignItems="center" justifyContent="center" height={300}>

    <Box>
    <Heading size="lg">Your final score:</Heading>
    </Box>
  <Box>
    <Heading size="xl" color="red"> {score} / {totalQuestionCount}</Heading>
  </Box>
  </Box>
);

  export default FinalScore;
