const getPathWithoutLastSlash = (path: string) => {
  if (path.endsWith('/')) {
    return path.slice(0, -1);
  }
  return path;
};

export default getPathWithoutLastSlash;
