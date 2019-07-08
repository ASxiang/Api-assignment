import { FETCH_SINGLE_EMPLOYEE_SUCCESS,FETCH_SINGLE_EMPLOYEE_ERROR,FETCH_SINGLE_EMPLOYEE_POST_ERROR} from "../actions/types";

export default (state = {
    error: null,
    fetchsingle: [],
}, action) => {
  switch (action.type) {
      case FETCH_SINGLE_EMPLOYEE_SUCCESS:
          return {
            ...state,
            fetchsingle: action.payload,
        }
        break;
    case FETCH_SINGLE_EMPLOYEE_ERROR:
          return {
            ...state,
            error:"FETCH_ALL_EMPLOYEE_ERROR"
        }
          break;
      case FETCH_SINGLE_EMPLOYEE_POST_ERROR:
          return {
              ...state,
              error:"FETCH_ALL_EMPLOYEE_POST_ERROR"
          }
          break;
    default:
    return state;
  }
};
