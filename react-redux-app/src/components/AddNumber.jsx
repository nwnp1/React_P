import React, {Component} from 'react';

export default class AddNumber extends Component {
  state = {size:1} //state의 size 속성값의 초깃값을 1로 설정
  render() {
    return (
      <div>
        <h1>Add Number</h1>
        <input type="button" value="+" onClick={function() {
          this.props.onClick(this.state.size);
        }.bind(this)}></input>
        <input type="text" value={this.state.size} onChange={function(e) {
          this.setState({size:Number(e.target.value)});
        }.bind(this)}></input>
      </div>
    );
  }
}