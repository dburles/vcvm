import data from './data.json';
import alphabeticSort from './lib/alphabetic-sort';
import identity from './lib/identity';
import unique from './lib/unique';

export const allTags = unique(
  data
    .map(collection => collection.modules.map(module => module.tags).flat())
    .flat()
    .map(tag => tag.toLowerCase()),
  identity,
).sort(alphabeticSort);

export const allBrands = data
  .map(collection => collection.name)
  .sort(alphabeticSort);
