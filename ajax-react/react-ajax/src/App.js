import React, { Component } from 'react';

class Nav extends Component {
  state = { //state에 json 데이터를 저장하고 list값을 통해 목록의 항목 생성
    list:[]
  }
  componentDidMount() {
    fetch('list.json') //fetch API는 첫번째 인자로 가져오려고 하는 데이터의 주소 받음
      .then(function(result) { //list.json에 담긴 데이터를 브라우저가 가져오면 가져온 데이터를 어떻게 처리할 것인지 구현
        return result.json(); //result를 대상으로 json()메서드 호출하면 브라우저가 list.json의 파일의 데이터를 자바스크립트 객체로 변환
      })
      .then(function(json) { //변환된 자바스크립트 객체는 두 번째 then 함수의 인자로 공급된 함수의 첫 번째 인자로 전달
        console.log(json);
        this.setState({list:json});
      }.bind(this));
  }
  render() {
    var listTag = [];
    for(var i=0; i<this.state.list.length; i++) {
      var li = this.state.list[i];
      listTag.push(<li key= {li.id}><a href={li.id}>{li.title}</a></li>)
    }
    return (
      <nav>
        {listTag}
      </nav>
    );
  }
}

function App() {
  return (
    <div className="App">
      <h1>WEB</h1>
      <Nav></Nav>
      <article>
        <h2>welcome</h2>
        Hi, React &amp; Ajaxs
      </article>
    </div>
  );
}

export default App;
