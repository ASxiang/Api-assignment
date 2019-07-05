import { FETCH_ALL_EMPLOYEE_SUCCESS,FETCH_ALL_EMPLOYEE_ERROR,FETCH_ALL_EMPLOYEE_POST_ERROR} from "../actions/types";

export default (state = {
    error: null,
    fetch: [],
}, action) => {
  switch (action.type) {
      case FETCH_ALL_EMPLOYEE_SUCCESS:
          return {
            ...state,
            fetch: action.payload,
        }
        break;
    case FETCH_ALL_EMPLOYEE_ERROR:
          return {
            ...state,
            error:"FETCH_ALL_EMPLOYEE_ERROR"
        }
          break;
      case FETCH_ALL_EMPLOYEE_POST_ERROR:
          return {
              ...state,
              error:"FETCH_ALL_EMPLOYEE_POST_ERROR"
          }
          break;
    default:
    return state;
  }
};
