const withModifiers = (className) => (modifiers = []) =>
  `${className} ${modifiers.map((mod) => `${className}--${mod}`)}`.trim();

export default withModifiers;
