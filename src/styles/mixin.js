export const flex = (a = 'center', b = 'center') => {
  return `display: flex;
  justify-content: ${a};
  align-items: ${b};`;
};

//불러올 때: flexBetween();
