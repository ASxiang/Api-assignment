import React, { Component } from "react";
import MainWrapper from "../wrappers/MainWrapper";
import Button from '@material-ui/core/Button';
import classNames from 'classnames';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { reduxForm, Field, reset } from "redux-form";
import CustomTextField from "../../components/fields/CustomTextField";
import { changePasswordStyle } from '../../utils/Style';
import { withStyles } from '@material-ui/core/styles';
import { connect } from "react-redux";
import Grid from '@material-ui/core/Grid';
import CancelIcon from '@material-ui/icons/Cancel';
import CheckIcon from '@material-ui/icons/CheckCircle';
import { updatepassword, checkPackage, checkUserRole, getNotExpiredPackages } from "../../actions";

function getModalStyle() {
    return {
        top: `${50}%`,
        left: `${50}%`,
        transform: `translate(-${50}%, -${50}%)`,
    };
}

const required_fields = [
    { name: "oldPassword", label: "Old Password" },
    { name: "newPassword", label: "New Password" },
    { name: "confirmPassword", label: "Confirm Password" },
];

class Dashboard extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            open: false,
            isSwitchSnackbarOn: false,
            isSnackbarError: false,
            isCancel: true
        };
        console.log(this.props);
    }


    render() {
        const { classes } = this.props;
        return (
            <MainWrapper
                history={this.props.history}
                isDisplayOn="none"
                userRoles={this.props.userRoles}
                getNotExpiredPackages={this.props.getNotExpiredPackagesValue}
                >
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Dashboard</h1>
                </div>
                <div>
                   
                </div>
          </MainWrapper>
        );
    }
}

function validate(values) {
    const errors = {};

  
    return errors;
}

export default Dashboard;