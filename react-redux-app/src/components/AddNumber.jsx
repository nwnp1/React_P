import React, {Component} from 'react';
import store from '../store'; //이 store를 통해 리덕스 스토어에 접근 가능

export default class AddNumber extends Component {
  state = {size:1} //state의 size 속성값의 초깃값을 1로 설정
  render() {
    return (
      <div>
        <h1>Add Number</h1>
        <input type="button" value="+" onClick={function() {
          store.dispatch({type:'INCREMENT', size:this.state.size}); //store에 있는 dispatch 메서드를 통해 값과 type 전달(type값은 INCREMENT, size는 AddNumber 컴포넌트의 state.size값 전달)
        }.bind(this)}></input>
        <input type="text" value={this.state.size} onChange={function(e) {
          this.setState({size:Number(e.target.value)});
        }.bind(this)}></input>
      </div>
    );
  }
}