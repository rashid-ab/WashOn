  import {MENU,ORDER} from '../actions/actionTypes';
  const INITIAL_STATE = {
    menu:'',
    order:[],
    count:''
  };

  const reducer = (state = INITIAL_STATE, action) => {
    state.isError = false;
    switch(action.type){
      case MENU:
        return {
          ...state,
          menu: action.payload
        }
      // case LOGOUT:
      //   return{
      //       menu:''
      //   }
        case ORDER:
          // const data=[]
          // data.push(action.payload)
          return {
            ...state,
            order:action.payload
          }
      default:
        return {...state}
    }
  };

  export default reducer;