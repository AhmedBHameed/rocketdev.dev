const titleToSlug = (title: string): string => {
  const slug = title.replace(/\s/g, '-');
  return encodeURIComponent(slug.toLowerCase());
};

export default titleToSlug;
