import React, {Component} from 'react';
import DisplayNumber from '../containers/DisplayNumber'; //이 래퍼 컴포넌트를 사용하도록 변경

export default class DisplayNumberRoot extends Component {
    render() {
      return (
        <div>
          <h1>Display Number Root</h1>
        <DisplayNumber unit="kg"></DisplayNumber>
          </div>
      )
    }
  }