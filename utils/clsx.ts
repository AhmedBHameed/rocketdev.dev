const clsx = (...className: (string | undefined)[]) => {
  const classes = className.filter(Boolean);
  return classes.length ? classes.join(' ') : undefined;
};

export default clsx;
