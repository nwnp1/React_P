import DisplayNumber from '../components/DisplayNumber';
import React, {Component} from 'react';
import store from '../store'; //store 임포트

export default class extends Component { //DisplayNumber 텍스트 입력상자에는 store에 있는 데이터를 사용해야 함
  state = {number:store.getState().number} //store.getState 함수로 리덕스 스토어의 state를 가져와 DisplayNumber의 state에 있는 number값에 전달
  constructor(props) { //이 컴포넌트가 스토어의 state 값이 변경됐다는 사실을 통보받을 수 있게 구독
    super(props); //constructor의 맨 윗줄에서 실행하도록 약속된 코드
    store.subscribe(function() { //subscribe메서드 통해 구독기능 구현. subscribe 첫 번째 인자는 함수. 리덕스 스토어의 값이 변경될 때 호출
      this.setState({number:store.getState().number});
    }.bind(this));
  }
    render() { //익명 컴포넌트 구현 후 DisplayNumber 함수 반환
      return <DisplayNumber number={this.state.number}></DisplayNumber>
    }
  }