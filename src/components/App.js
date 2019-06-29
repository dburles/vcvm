import { MarkGithub } from '@primer/octicons-react';
import React, { useState } from 'react';
import { Flex, Box, Text, Button } from 'rebass';
import data from '../data/data.json';
import allTags from '../data/tags';
import alphabeticSort from '../lib/alphabetic-sort';
import Icon from './Icon.js';
import Link from './Link';
import ModuleCard from './ModuleCard';
import Title from './Title';

const App = () => {
  const [selectedCollection, setSelectedCollection] = useState();
  const [selectedTag, setSelectedTag] = useState();

  return (
    <>
      <Flex m={4} justifyContent="center">
        <Title fontSize={5}>Rack modules</Title>
      </Flex>
      <Flex m={3}>
        <Box p={3}>
          <Button
            border="1px solid"
            borderColor="grey.7"
            color="grey.7"
            py={1}
            onClick={() => {
              setSelectedCollection(undefined);
              setSelectedTag(undefined);
            }}
          >
            Reset filters
          </Button>
          <Flex mt={3} mx={-2}>
            <Flex flexDirection="column" px={2}>
              <Title mb={2}>Collections</Title>
              {data
                .sort((a, b) => alphabeticSort(a.name, b.name))
                .map(collection => (
                  <Box key={collection.slug}>
                    <Link
                      active={selectedCollection === collection.slug}
                      fontSize={1}
                      onClick={() => setSelectedCollection(collection.slug)}
                    >
                      {collection.name}{' '}
                      <small>({collection.modules.length})</small>
                    </Link>
                  </Box>
                ))}
            </Flex>
            <Flex flexDirection="column" px={2}>
              <Title mb={2}>Tags</Title>
              {allTags.map(tag => (
                <Box key={tag}>
                  <Link
                    active={selectedTag === tag}
                    fontSize={1}
                    onClick={() => setSelectedTag(tag)}
                  >
                    {tag}
                  </Link>
                </Box>
              ))}
            </Flex>
          </Flex>
        </Box>
        <Box p={3} flex={1}>
          <Flex flexWrap="wrap" mx={-2} css="max-width: 1200px">
            {!selectedCollection && !selectedTag ? (
              <Text>No filter selected.</Text>
            ) : (
              data
                .filter(collection =>
                  selectedCollection
                    ? collection.slug === selectedCollection
                    : true,
                )
                .map(collection =>
                  collection.modules
                    .filter(module => module.disabled !== 'true')
                    .filter(module =>
                      selectedTag
                        ? module.tags.some(
                            tag =>
                              tag.toLowerCase() === selectedTag.toLowerCase(),
                          )
                        : true,
                    )
                    .sort((a, b) => alphabeticSort(a.name, b.name))
                    .map(module => (
                      <Box
                        width={[1, 1, 1, 1 / 2]}
                        key={module.slug}
                        px={2}
                        py={2}
                      >
                        <ModuleCard module={module} collection={collection} />
                      </Box>
                    )),
                )
            )}
          </Flex>
        </Box>
      </Flex>
      <Flex m={4} justifyContent="center">
        <Icon icon={MarkGithub} color="black" mr={2} />{' '}
        <a
          href="https://github.com/dburles/vcvm"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </Flex>
    </>
  );
};

export default App;
