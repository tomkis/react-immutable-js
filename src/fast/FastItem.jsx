const React = require('react');

export class FastItem extends React.Component {

  shouldComponentUpdate(nextProps) {
    // Yes, we can do this as the pointer changes,
    // unfortunatelly this can't be done in SlowItem.jsx
    return nextProps.item !== this.props.item;
  }

  render() {
    const style = {
      color: this.props.item.get('color')
    };

    return <div style={style} onClick={this.onClick.bind(this)}>{this.props.item.get('item')}</div>
  }

  onClick() {
    this.props.onClick();
  }
}