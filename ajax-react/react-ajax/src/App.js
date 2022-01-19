import React, { Component } from 'react';

class Nav extends Component {
  render() {
    var listTag = [];
    for(var i=0; i<this.props.list.length; i++) {
      var li = this.props.list[i];
      listTag.push(
        <li key= {li.id}>
          <a href={li.id} data-id={li.id} onClick={function(e) { //onClick 함수에 id를 인자로 전달하기 위해 data-id props에 id를 저장
            e.preventDefault();
            console.log('trigger');
            this.props.onClick(e.target.dataset.id);
          }.bind(this)}>
            {li.title}
          </a>
        </li>)
    }
    return (
      <nav>
        {listTag}
      </nav>
    );
  }
}

//다른 곳에서도 재활용 할 수 있고 보여주는 기능 외에 다른 기능 존재하지 않음
class Article extends Component {
  render() {
    return (
      <article>
        <h2>{this.props.title}</h2>
        {this.props.desc}
      </article>
    );
  }
}

class App extends Component {
  state = { //state 추가
    article:{title:'Welcome', desc:'Hello, React & Ajax'},
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
    return (
      <div className="App">
        <h1>WEB</h1>
        <Nav list={this.state.list} onClick={function(id){ //Nav 컴포넌트 내에서 id를 인자로 props에 전달받은 onClick 함수 호출
          fetch(id+'.json') //각 id에 해당하는 JSON 파일을 읽기 위해 fetch API 사용
            .then(function(result) {
              return result.json();
            })
            .then(function(json) {
              this.setState({ //데이터 App 컴포넌트의 state에 저장
                article:{
                  title:json.title,
                  desc:json.desc
                }
              });
            }.bind(this));
        }.bind(this)}></Nav>
        <Article title={this.state.article.title} desc={this.state.article.desc}></Article>
      </div>
    );
  }
}



export default App;
