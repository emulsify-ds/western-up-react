import withModifiers from './withModifiers';

const bem = (block = '', element = '', modifiers) => {
  const base = block && element ? block + '__' + element : [block, element].join('');
  return withModifiers(base)(modifiers)
}

export default bem;
