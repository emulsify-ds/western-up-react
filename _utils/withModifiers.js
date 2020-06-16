// This has been replaced by the bem function.
// TODO: Replace all uses of `withModifiers` with `bem`

const withModifiers = (className) => (modifiers = []) =>
  `${className} ${modifiers
    .map((mod) => `${className}--${mod}`)
    .join(' ')}`.trim();

export default withModifiers;
