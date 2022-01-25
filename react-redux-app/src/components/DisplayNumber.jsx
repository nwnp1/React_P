import React, {Component} from 'react';

export default class DisplayNumber extends Component { //DisplayNumber 텍스트 입력상자에는 store에 있는 데이터를 사용해야 함
    render() {
      return (
        <div>
          <h1>Display Number</h1>
          <input type="text" value={this.props.number} readOnly></input> {this.props.unit}
        </div>
      );
    }
  }