const getPathWithoutStartSlash = (path: string) => {
  if (path.startsWith('/')) {
    return path.slice(0, -1);
  }
  return path;
};

export {getPathWithoutStartSlash};
