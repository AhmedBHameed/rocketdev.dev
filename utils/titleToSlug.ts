const titleToSlug = (title: string): string => {
  const slug = title.replace(/\s/g, '-');
  return slug.toLowerCase();
};

export default titleToSlug;
