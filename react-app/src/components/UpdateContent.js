import React, { Component } from 'react';

class UpdateContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.data.id,
            title: this.props.data.title,
            desc: this.props.data.desc
        };
        this.inputFormHandler = this.inputFormHandler.bind(this); //constructor에서 이미 bind된 함수로 this.inputFormHandler 값 교체
    }
    inputFormHandler(e) {
        this.setState({[e.target.name]:e.target.value}); //객체 내에서 대괄호를 사용하면 객체에서 대괄호 내의 값을 프로퍼티로 사용할 수 있다. e.target.name 은 인자 e에 따라 title 또는 desc가 될 수 있다.
    }
    render() {
      console.log(this.props.data);
      console.log('UpdateContent render');
      return (
        <article>
            <h2>Update</h2>
            <form action="/create process" method="post"
                onSubmit={function(e) {
                    e.preventDefault();
                    this.props.onSubmit( 
                        this.state.id,
                        this.state.title,
                        this.state.desc
                    );
                }.bind(this)}>
                    <input type="hidden" name="id" value={this.state.id}></input>
                    <p>
                        <input 
                        type="text" 
                        name="title" 
                        placeholder="title"
                        value={this.state.title} //폼의 <input>에 텍스트 채우는 코드 추가. props에 전달된 데이터를 직접 value 속성에 넣음
                        onChange={this.inputFormHandler}
                        ></input>
                    </p>
                    <p>
                        <textarea 
                            name="desc" 
                            placeholder="description"
                            value={this.state.desc}
                            onChange={this.inputFormHandler}
                        ></textarea>
                    </p>
                    <p>
                        <input type="submit"></input>
                    </p>
            </form>
        </article>
      );
    }
  }

  export default UpdateContent;