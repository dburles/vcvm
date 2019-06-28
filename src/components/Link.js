import React from 'react';
import { Text } from 'rebass';
import styled from 'styled-components';

const StyledLink = styled(Text)`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Link = props => {
  return (
    <StyledLink
      {...(props.active && { fontWeight: 'bold', color: 'red.6' })}
      {...props}
    />
  );
};

export default Link;
