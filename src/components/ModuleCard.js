import {
  Law,
  Versions,
  Person,
  LinkExternal,
  Plus,
} from '@primer/octicons-react';
import React from 'react';
import { Flex, Box, Card, Text } from 'rebass';
import { css } from 'styled-components';
import Divider from './Divider';
import Icon from './Icon';

const DetailText = props => (
  <Text width={1 / 2} color="grey.8" fontSize={0} my={1} {...props} />
);

const ModuleCard = props => {
  return (
    <Card borderRadius={5} border="1px solid" borderColor="grey.3">
      <Flex
        flexDirection="column"
        p={3}
        css={css`
          overflow: auto;
          word-wrap: break-word;
        `}
      >
        <Box>
          <Flex flexDirection="row">
            <Text flex={1} fontWeight="bold">
              {props.module.name}
            </Text>
            <Text fontSize={0}>
              <Icon mr={1} icon={Plus} />
              <a
                href={`https://vcvrack.com/plugins.html#${props.collection.name}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Install
              </a>
            </Text>
          </Flex>
        </Box>
        <Box flex="1 1 auto">
          <Divider my={3} />
          <Text fontSize={1}>
            {props.module.description || 'No description'}
          </Text>
        </Box>
        <Box mt={3}>
          <Flex width={1} flexWrap="wrap">
            <DetailText>
              <Icon mr={1} icon={Versions} /> {props.collection.version}
            </DetailText>
            <DetailText>
              <Icon mr={1} icon={Law} /> {props.collection.license}
            </DetailText>
            <DetailText>
              <Icon mr={1} icon={Person} /> {props.collection.author}
            </DetailText>
            <DetailText>
              <Icon mr={1} icon={LinkExternal} />{' '}
              <a
                href={props.collection.pluginUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {props.collection.brand || props.collection.name}
              </a>
            </DetailText>
          </Flex>
        </Box>
      </Flex>
    </Card>
  );
};

export default ModuleCard;
