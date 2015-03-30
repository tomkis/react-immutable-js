const React = require('react');

import {SlowItems} from './slow/SlowItems.jsx';
import {FastItems} from './fast/FastItems.jsx';

export class Application extends React.Component {

  render() {
    return (
      <div>
        <SlowItems items={this.props.mutableItems} />
        <FastItems items={this.props.immutableItems} />
      </div>
    );
  }
};