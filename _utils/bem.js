const bem = (
  block = '',
  element = '',
  modifiers = [],
  additionalClasses = [],
) => {
  const base =
    block && element ? block + '__' + element : [block, element].join('');

  const componentClasses = `${base} ${modifiers
    .map((mod) => `${base}--${mod}`)
    .join(' ')}`.trim();

  if (additionalClasses.length) {
    return componentClasses + ' ' + additionalClasses.join(' ');
  }

  return componentClasses;
};

export default bem;
