import React from 'react';
import {Box, Heading, Icon, IconButton, Text} from 'gestalt';

const Header = ({score, totalQuestionCount}) => (
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
      <Text color="red" mdSize>Score: {score} / {totalQuestionCount}</Text>
    </Box>
    <Box paddingX={2}>
      <IconButton accessibilityLabel="Profile" icon="person" size="md"/>
    </Box>
  </Box>)

export default Header;
