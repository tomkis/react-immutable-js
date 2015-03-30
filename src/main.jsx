const React = require('react/addons');
const Immutable = require('immutable');
window.Perf = React.addons.Perf; // Just for benchmarking
// Use it in your console as follows
// Perf.start(); // before clicking on the item
// Perf.stop(); // after clicking on the item
// Perf.printWasted();

import {Application} from './Application.jsx';
import {randomColor} from './Helpers.js';

const GENERATED_ITEMS_COUNT = 10000;

// mutable const? WTH?
// Yes, that's correct the pointer is const though content may change,
// this is not really straightforward
const mutableItems = [];
for (let i = 0; i < GENERATED_ITEMS_COUNT; i++) {
  mutableItems.push({
    item: i,
    color: randomColor()
  });
}

const immutableItems = Immutable.fromJS(mutableItems);

React.render(<Application
  mutableItems={mutableItems}
  immutableItems={immutableItems} />,
  document.getElementById('app'));