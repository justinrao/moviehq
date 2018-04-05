import React from 'react';
import {Box, Icon} from 'gestalt';

const AnswerResult = ({correct}) => (

  <Box display="flex" direction="row" alignItems="center" justifyContent="center" height={300}>
    {correct ? <Icon color="red" icon="check" size={90}></Icon>
    : <Icon color="red" icon="cancel" size={90}></Icon>}
  </Box>
);

export default AnswerResult;
