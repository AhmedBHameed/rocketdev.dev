const slugToTitle = (slug: string): string => {
  const title = slug.replace(/_/g, ' ');
  return title.charAt(0).toUpperCase() + title.slice(1);
};

export default slugToTitle;
