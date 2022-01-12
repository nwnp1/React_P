import React, { Component } from 'react';

class Control extends Component {
    render() {
      console.log('Subject render');
      return (
        <ul>
            <li><a href="/create" onClick={function(e) {
                e.preventDefault(); //페이지 변경 막음
                this.props.onChangeMode('create');
            }.bind(this)}>create</a></li>
            <li><a href="/update" onClick={function(e) {
                e.preventDefault();
                this.props.onChangeMode('update');
            }.bind(this)}>update</a></li>
            <li><input onClick={function(e) {
                e.preventDefault();
                this.props.onChangeMode('delete'); //delete버튼이 onChangeMode 함수 호출
            }.bind(this)} type="button" value="delete"></input></li>
        </ul>
      );
    }
  }

  export default Control;