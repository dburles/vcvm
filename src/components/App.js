import { MarkGithub } from '@primer/octicons-react';
import qs from 'qs';
import React, { useState, useEffect } from 'react';
import { Flex, Box, Text, Button } from 'rebass';
import data from '../data/data.json';
import allTags from '../data/tags';
import alphabeticSort from '../lib/alphabetic-sort';
import Icon from './Icon.js';
import Link from './Link';
import ModuleCard from './ModuleCard';
import Title from './Title';

const App = () => {
  const [, update] = useState();

  useEffect(() => {
    window.onpopstate = () => update({});
  });

  const updateRoute = state => {
    window.history.pushState({}, null, `?${qs.stringify(state)}`);
    update({});
  };

  const query = qs.parse(window.location.search.substr(1));

  const selectedCollection = query.c;
  const selectedTags = query.t || [];

  const toggleSelectedCollection = collection => {
    if (query.c === collection) {
      delete query.c;
      updateRoute(query);
    } else {
      updateRoute({ ...query, c: collection });
    }
  };

  const toggleSelectedTag = tag => {
    if (query.t && query.t.includes(tag)) {
      updateRoute({ ...query, t: query.t.filter(t => t !== tag) });
    } else {
      updateRoute({
        ...query,
        t: [...selectedTags, tag],
      });
    }
  };

  return (
    <>
      <Flex m={4} justifyContent="center">
        <Title fontSize={4} fontWeight="bold">
          VCV Rack Modules
        </Title>
      </Flex>
      <Flex m={3}>
        <Box p={3}>
          <Button
            border="1px solid"
            borderColor="grey.7"
            color="grey.7"
            py={1}
            onClick={() => {
              updateRoute({});
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
                      onClick={() => toggleSelectedCollection(collection.slug)}
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
                    active={selectedTags.includes(tag)}
                    fontSize={1}
                    onClick={() => toggleSelectedTag(tag)}
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
            {!selectedCollection && !selectedTags.length ? (
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
                      selectedTags.length
                        ? selectedTags.every(tag => module.tags.includes(tag))
                        : !!selectedCollection,
                    )
                    .sort((a, b) => alphabeticSort(a.name, b.name))
                    .map(module => (
                      <Box key={module.slug} px={2} py={2} flex="0 0 320px">
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
