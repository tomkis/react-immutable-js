const React = require('react');

export class SlowItem extends React.Component {

  render() {
    const style = {
      color: this.props.item.color
    };

    return <div style={style} onClick={this.onClick.bind(this)}>{this.props.item.item}</div>
  }

  onClick() {
    this.props.onClick();
  }
}