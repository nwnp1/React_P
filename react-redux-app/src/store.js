import {createStore} from 'redux'; //createStore 라는 함수를 redux로부터 임포트
export default createStore(function(state, action){ //createStore 반환값을 다른 곳에서 임포트 할 수 있게 export default 구문 추가
    if(state === undefined) {
        return {number:0} //state가 undefined일 때 {number:0}으로 state 초기화
    }
    if(action.type === 'INCREMENT') {
        return {...state, number:state.number + action.size} //...state는 기존 state의 모든 값을 새로 만들어지는 객체에 그대로 추가하되 number 값만 변경할 때 사용하는 문법. 구조 분해 할당이라고 함
    }
    return state;
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())