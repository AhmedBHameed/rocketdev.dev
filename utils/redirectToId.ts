const redirectToId = () => {
  const hash = window.location.hash;
  if (hash) setTimeout(() => location.replace(hash), 500);
};
export default redirectToId;
