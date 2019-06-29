import { Law, Versions, Person } from '@primer/octicons-react';
import React from 'react';
import { Flex, Box, Card, Text } from 'rebass';
import styled from 'styled-components';
import NoImage from '../assets/NoImage';
import Icon from './Icon';

const ImagePlaceholder = styled.div`
  display: flex;
  align-items; center;
  background-color: ${props => props.theme.colors.grey[2]};
  flex: 0 0 150px;
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

        <Flex flex={1} flexDirection="column" p={3}>
          <Box>
            <Flex>
              <Text flex={1} fontWeight="bold">
                {props.module.name}
              </Text>

              <Text fontSize={0}>
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
            <Text fontSize={1} my={3}>
              {props.module.description || 'No description'}
            </Text>
          </Box>
          <Box>
            <Flex>
              <Text color="grey.8" width={1 / 3} fontSize={0}>
                <Icon mr={1} icon={Versions} /> {props.collection.version}
              </Text>
              <Text
                color="grey.8"
                width={1 / 3}
                fontSize={0}
                textAlign="center"
              >
                <Icon mr={1} icon={Law} /> {props.collection.license}
              </Text>
              <Text color="grey.8" width={1 / 3} fontSize={0} textAlign="right">
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
