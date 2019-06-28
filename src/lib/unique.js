export default function unique(array, fn) {
  const seen = [];
  return array.filter(item => {
    const id = fn(item);
    if (!seen.includes(id)) {
      seen.push(id);
      return true;
    }
  });
}
