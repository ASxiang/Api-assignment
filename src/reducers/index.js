import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";
import fetchall from "./FetchallemployeeReducer";
import fetchsingle from "./FetchsingleemployeeReducer"
export default combineReducers({
    form: reduxForm,
    fetchall,
    fetchsingle
});
