import data from './data/data.json';
import alphabeticSort from './lib/alphabetic-sort';

export const allBrands = data
  .map(collection => collection.name)
  .sort(alphabeticSort);
