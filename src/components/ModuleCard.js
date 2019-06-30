import { Law, Versions, Person, LinkExternal } from '@primer/octicons-react';
import React from 'react';
import { Flex, Box, Card, Text } from 'rebass';
import styled, { css } from 'styled-components';
import NoImage from '../assets/NoImage';
import Divider from './Divider';
import Icon from './Icon';

const ImagePlaceholder = styled.div`
  display: flex;
  align-items; center;
  background-color: ${props => props.theme.colors.grey[2]};
  flex: 0 0 120px;
  height: 300px;
  svg {
    flex: 1;
    margin: 24px;
    fill: ${props => props.theme.colors.grey[4]};
  }
`;

const ModuleCard = props => {
  return (
    <Card borderRadius={5} border="1px solid" borderColor="grey.3">
      <Flex>
        <ImagePlaceholder>
          <NoImage />
        </ImagePlaceholder>

        <Flex
          flexDirection="column"
          p={3}
          css={css`
            overflow: auto;
            word-wrap: break-word;
          `}
        >
          <Box>
            <Flex flexDirection="column">
              <Text fontWeight="bold">{props.module.name}</Text>
              <Text color="grey.8" fontSize={0} mt={2}>
                <Icon mr={1} icon={LinkExternal} />
                <a
                  href={props.collection.pluginUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {props.collection.brand || props.collection.name}
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
            <Flex flexDirection="column">
              <Text color="grey.8" fontSize={0}>
                <Icon mr={1} icon={Versions} /> {props.collection.version}
              </Text>
              <Text color="grey.8" fontSize={0} my={2}>
                <Icon mr={1} icon={Law} /> {props.collection.license}
              </Text>
              <Text color="grey.8" fontSize={0}>
                <Icon mr={1} icon={Person} /> {props.collection.author}
              </Text>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </Card>
  );
};

export default ModuleCard;
