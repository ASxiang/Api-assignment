import React, { Component, Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
//import SignIn from "./components/SignIn";
//import SignUp from "./components/SignUp";
//import SignUpMem from "./components/SignUpMem";
import Dashboard from "./components/tabs/Dashboard";
//import requireAuth from "./components/requireAuth";
import Allemployeelist from "./components/tabs/AllEmployeeList";
import SingleEmployeelist from "./components/tabs/SingleEmployeeList";
import SingleEmployeeList from "./components/tabs/SingleEmployeeList";
//import UploadFile from "./components/UploadFile"
//import DownloadFile from "./components/tabs/Download";
//import Projects from "./components/tabs/user/Project";
//import FileManageList from "./components/tabs/user/FileManageList";
//import LayerManageList from "./components/tabs/user/LayerManageList";
//import License from "./components/tabs/user/License";
//import MainUserList from "./components/tabs/MainUserList";
//import EmailUserList from "./components/tabs/EmailUserList";
//import PlainUserList from "./components/tabs/PlainUserList";
//import PublishLayerManageList from "./components/tabs/user/PublishLayerManageList";
//import PublicLayerManageList from "./components/tabs/user/PublicLayerManageList";
//import ViewPublicRequestList from "./components/tabs/user/ViewPublicRequestList";
//import Quota from "./components/tabs/user/Quota";
//import SubscriptionList from "./components/tabs/user/SubscriptionList";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <CssBaseline />
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/allemployee" component={Allemployeelist} />
            <Route exact path="/singleemployee" component={SingleEmployeeList} />
           
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
//  <Route exact path="/layers/request" component={requireAuth(UpdateLayerRequestList)} />
// <Route exact path="/layers/update" component={requireAuth(UpdateLayer)} />
//<Route exact path="/singleemployee" component={Singleemployee} />