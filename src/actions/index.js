import axios from "axios";
import history from '../history';
import * as type from "./types";
import { REGISTER_PACKAGE_SUCCESS, REGISTER_PACKAGE_POST_ERROR, REGISTER_PACKAGE_ERROR, SESSION_INVALID, DDOS_SUSPECTED, POST_ERROR, REGISTER_MAIN_USER_SUCCESS } from "./types";
 
const SW_API_URL = "https://swapi.co/api";


export const fetchallemployee = () => async dispatch => {
        await axios.get(
            'http://dummy.restapiexample.com/api/v1/employees',
    ).then(response => {
        console.log(response);
        return dispatch({
            type: type.FETCH_ALL_EMPLOYEE_SUCCESS,
            payload: response.data,
          //  message: data.getprojectlist.message,

        });
    });
}

export const fetchsingleemployee  = (id) => async dispatch => {
   // const query = `query{selectuserwithwithoutpackagepaginate( keyword:"${keyword}",offset:${offset},limit:${limit},sessionKey:"${localStorage.getItem("sessionKey")}") { id, username, status, datetime_created, pw_modified, lastlogin, login_ip, accessibility_user_id, message }}`;
    await axios.get(
        'http://dummy.restapiexample.com/api/v1/employees/',
        ).then(response => {
            console.log(response);
            return dispatch({
                type: type.FETCH_SINGLE_EMPLOYEE_SUCCESS,
                 payload: response.data,
              //  message: data.getprojectlist.message,
    
            });
        });
};

