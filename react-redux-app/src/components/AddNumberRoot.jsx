import React, {Component} from 'react'
import AddNumber from '../components/AddNumber';

export default class AddNumberRoot extends Component {
    render() {
      return (
        <div>
          <h1>Add Number Root</h1>
          <AddNumber onClick={function(size) { //AddNumber의 +버튼 클릭했을 때 AddNumber의 state.size값을 인자로 호출할 것
            this.props.onClick(size);
          }.bind(this)}></AddNumber>
        </div>
      );
    }
  }