const getData = async () => {
  const data = await import('./assets/words.json');
  return data;
};

export { getData };