import React, { useState } from 'react';
import { Flex, Box, Text, Card, Button } from 'rebass';
import { allTags } from '../data';
import data from '../data.json';
import alphabeticSort from '../lib/alphabetic-sort';
import Link from './Link';
import Title from './Title';

const App = () => {
  const [selectedBrand, setSelectedBrand] = useState();
  const [selectedTag, setSelectedTag] = useState();

  return (
    <>
      <Flex m={4} justifyContent="center">
        <Title fontSize={5}>VCV Modules</Title>
      </Flex>
      <Flex m={3}>
        <Box p={3}>
          <Button
            border="1px solid"
            borderColor="grey.7"
            color="grey.7"
            py={1}
            onClick={() => {
              setSelectedBrand(undefined);
              setSelectedTag(undefined);
            }}
          >
            Reset filters
          </Button>
          <Flex mt={3} mx={-2}>
            <Flex flexDirection="column" px={2}>
              <Title mb={2}>Brands</Title>
              {data
                .sort((a, b) => alphabeticSort(a.name, b.name))
                .map(collection => (
                  <Box key={collection.slug}>
                    <Link
                      active={selectedBrand === collection.name}
                      fontSize={2}
                      onClick={() => setSelectedBrand(collection.name)}
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
                    fontSize={2}
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
          <Flex flexWrap="wrap" mx={-2} css="max-width: 900px">
            {!selectedBrand && !selectedTag ? (
              <Text>No filter selected.</Text>
            ) : (
              data
                .filter(collection =>
                  selectedBrand ? collection.name === selectedBrand : true,
                )
                .map(collection =>
                  collection.modules
                    .filter(module =>
                      selectedTag
                        ? module.tags.some(
                            tag => tag.toLowerCase() === selectedTag,
                          )
                        : true,
                    )
                    .sort((a, b) => alphabeticSort(a.name, b.name))
                    .map(module => (
                      <Box width={[1, 1 / 2]} key={module.slug} px={2} py={2}>
                        <Card
                          p={3}
                          borderRadius={5}
                          border="1px solid"
                          borderColor="grey.3"
                        >
                          <Flex>
                            <Text flex={1} fontWeight="bold" mb={1}>
                              {module.name}
                            </Text>
                            <Text fontSize={1}>
                              <a
                                href={collection.sourceUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {collection.name}
                              </a>
                            </Text>
                          </Flex>
                          <Flex>
                            <Text fontSize={1}>{module.description}</Text>
                          </Flex>
                        </Card>
                      </Box>
                    )),
                )
            )}
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default App;
