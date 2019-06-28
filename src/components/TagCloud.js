import React from 'react';
import { Flex } from 'rebass';
import Tag from './Tag';

const TagCloud = props => {
  return (
    <Flex flexWrap="wrap">
      {props.tags.map(tag => (
        <Tag key={tag} m={1}>
          {tag}
        </Tag>
      ))}
    </Flex>
  );
};

export default TagCloud;
