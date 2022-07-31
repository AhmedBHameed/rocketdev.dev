const slugToTitle = (slug?: string): string => {
  if (!slug) return '';

  const title = slug.replace(/-/g, ' ');
  return decodeURIComponent(title.charAt(0).toUpperCase() + title.slice(1));
};

export default slugToTitle;
