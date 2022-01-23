import React, {Component} from 'react';
import './App.css';
import AddNumberRoot from './components/AddNumberRoot';
import DisplayNumberRoot from './components/DisplayNumberRoot';

class App extends Component {
  state = {number:0}
  render () {
    return (
      <div className="App">
        <h1>Root</h1>
        <AddNumberRoot onClick={function(size) { //onClick props에 size값을 인자로 하는 함수 전달
          this.setState({number:this.state.number + size}); //전달된 size값을 state.number에 더함
        }.bind(this)}></AddNumberRoot>
        <DisplayNumberRoot number={this.state.number}></DisplayNumberRoot>
      </div>
    );
  }
}

export default App;
