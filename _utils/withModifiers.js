const withModifiers = (className) => (modifiers = []) =>
  `${className} ${modifiers.map((mod) => `${className}--${mod}`).join(' ')}`.trim();

export default withModifiers;
