export const getShadowStyle = (shadow) => {
  const shadows = {
    none: 'none',
    small: '0 1px 3px rgba(0,0,0,0.12)',
    medium: '0 4px 6px rgba(0,0,0,0.1)',
    large: '0 10px 25px rgba(0,0,0,0.15)'
  };
  return shadows[shadow] || shadows.medium;
};
