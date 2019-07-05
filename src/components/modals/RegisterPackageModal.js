import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import AuthWrapper from "../../wrappers/AuthWrapper";
import CustomTextField from "../../components/fields/CustomTextField";
import validateEmail from "../../utils/validateEmail";
import { registerPackage } from "../../actions";
import MainWrapper from "../wrappers/MainWrapper";
import Modal from '@material-ui/core/Modal';

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const styles = theme => ({
    container: {
        display: "flex",
        flexWrap: "wrap",
        width: 350
    },
    button: {
        width: 300,
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 10
    },
    alreadySignIn: {
        marginTop: 10,
        marginBottom: 10,
        marginLeft: "auto",
        marginRight: "auto"
    },
    paper: {
        position: 'absolute',
        width: theme.spacing.unit * 50,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
    },
});

const required_fields = [
    { name: "username", label: "username" },
    { name: "password", label: "password" },
    { name: "passwordAgain", label: "password" },
    { name: "email", label: "email" }
];

class RegisterPackageModal extends Component {
    state = {
        open: false,
    };

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { classes, registerPackage } = this.props;

        return (
            <div>
                <Typography gutterBottom>Click to get the full Modal experience!</Typography>
                <Button onClick={this.handleOpen}>Open Modal</Button>
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.open}
                    onClose={this.handleClose}
                >
                    <div style={getModalStyle()} className={classes.paper}>
                        <Typography variant="title" id="modal-title">
                            Text in a modal
            </Typography>
                        <Typography variant="subheading" id="simple-modal-description">
                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
                        <SignUpWithStyles />
                    </div>
                </Modal>
            </div>
        );
    }
}

function validate(values) {
    const errors = {};

    if (!validateEmail(values["email"])) {
        errors["email"] = "This email in invalid";
    }

    required_fields.forEach(({ name, label }) => {
        if (!values[name]) {
            errors[name] = `You must provide ${label}`;
        }
    });

    return errors;
}

let SignUpWithStyles = withStyles(styles)(RegisterPackageModal);

SignUpWithStyles = reduxForm({
    validate,
    form: "registPackageForm"
})(SignUpWithStyles);

function mapStateToProps({ registerPackage }) {
    return {
        registerPackage
    };
}

export default connect(
    mapStateToProps,
    { registerPackage }
)(SignUpWithStyles);
