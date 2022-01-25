import AddNumber from '../components/AddNumber'; //components의 AddNumber 컴포넌트를 사용하므로 임포트
import React, { Component } from 'react';
import store from '../store';

export default class extends Component {
    render () {
        return <AddNumber onClick={function(size) {
            store.dispatch({type:'INCREMENT', size:size});
        }.bind(this)}></AddNumber> //감쌀 컴포넌트인 AddNumber 반환
    }
}