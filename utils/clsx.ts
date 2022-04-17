const clsx = (...className: (string | undefined)[]) =>
  className.filter(Boolean).join(' ');

export default clsx;
