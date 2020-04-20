  import {MENU,LOGOUT} from '../actions/actionTypes'
  const INITIAL_STATE = {
    menu:'',
  };

  const reducer = (state = INITIAL_STATE, action) => {
    state.isError = false;
    switch(action.type){
      case MENU:
        return {
          ...state,
          menu: action.payload
        }
      case LOGOUT:
        return{
            menu:''
        }
      default:
        return {...state}
    }
  };

  export default reducer;