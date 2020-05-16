import React from 'react';
import DefinitionList from './DefinitionList.component';
import OrderedList from './OrderedList.component';
import UnorderedList from './UnorderedList.component';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Lists' };

// @todo: The <code> tag in this example content does not render correctly.
// There are multiple ways to address this in React and can be address in a
// later story.
export const definitionList = () => (
  <DefinitionList
    items={[
      {
        term: 'Definition List',
        definition: 'A number of connected items or names written or printed consecutively, typically one below the other.',
      },
      {
        term: 'This is a term.',
        definition: 'This is the definition of that term, which both live in a <code>dl</code>.',
      },
      {
        term: 'Here is another term.',
        definition: 'And it gets a definition too, which is this line.',
      },
      {
        term: 'Here is one last term.',
        definition: 'With the final definition.',
      }
    ]}
  />
);

export const orderedList = () => (
  <OrderedList
    items={[
      { content: "This is the first item in the ordered list." },
      { content: "And here is the item that goes with the label.", label: "This is the optional label" },
      { content: "Here's the third item." },
      { content: "And here's the last item." },
    ]}
  />
);

export const unorderedList = () => (
  <UnorderedList
    items={[
      { content: "This is the first item in the unordered list." },
      { label: "This is the optional label", content: "And here is the item that goes with the label." },
      { content: "Here's the third item." },
      { content: "And here's the last item." },
    ]}
  />
);