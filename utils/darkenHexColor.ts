const darkenColor = (hex: string, percent: number) => {
  const num = parseInt(hex.slice(1), 16);
  const amt = Math.round(2.55 * percent);
  const R = (num >> 16) - amt;
  const G = ((num >> 8) & 0x00ff) - amt;
  const B = (num & 0x0000ff) - amt;
  return '#' + (0x1000000 + (R << 16) + (G << 8) + B).toString(16).slice(1);
};

export default darkenColor;
