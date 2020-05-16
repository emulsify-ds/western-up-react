import React from 'react';
import OrderedList from './OrderedList.component';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Lists' };

export const orderedList = () => (
  <OrderedList
    items={[
      {content: 'This is the first item in the ordered list.'},
      {content: 'And here is the item that goes with the label.'},
      {label: 'This is the optional label', content: "Here's the third item."},
      {content: "And here's the last item."},
    ]}
  />
)
