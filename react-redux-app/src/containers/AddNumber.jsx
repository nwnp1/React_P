import AddNumber from '../components/AddNumber'; //components의 AddNumber 컴포넌트를 사용하므로 임포트
import { connect } from 'react-redux';
function mapDispatchToProps(dispatch) { //이 함수를 이용해 mapDispatchToProps 함수 내에서 dispatch 함수를 호출해 리덕스 스토어에 dispatch 작업할 수 있음 
    return { //반환값은 객체. 컴포넌트의 props로 전달
        onClick:function(size) { //AddNumber 컴포넌트의 props이름이 onClick이므로 객체에 onClick이라는 프로퍼티를 준 것
            dispatch({type:'INCREMENT', size:size});
        }
    }
}
export default connect(null, mapDispatchToProps)(AddNumber); //AddNumber컴포넌트는 전달되는 이벤트 props만 존재하고 상태를 전달하는 props가 없기 때문에 connect 함수의 첫 번째 인자는 null을 전달

/*export default class extends Component {
    render () {
        return <AddNumber onClick={function(size) {
            store.dispatch({type:'INCREMENT', size:size});
        }.bind(this)}></AddNumber> //감쌀 컴포넌트인 AddNumber 반환
    }
}*/