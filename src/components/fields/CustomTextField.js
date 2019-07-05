import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const styles = theme => ({
    textField: {
        marginLeft: 25,
        marginRight: 25,
    },
});

class CustomTextField extends Component {
    showError = () => {
        const {
            meta: { error, touched }
        } = this.props;
        if (touched && error) {
            return error;
        }
    };

    render() {
        const {
            id,
            type,
            input,
            classes,
            fullWidth,
            meta: { error, touched }
        } = this.props;
        return (
                id == 'username' ?
                    <TextField
                        {...input}
                        id={id}
                        error={touched && error ? true : false}
                        className={classes.textField}
                        label={this.props.label}
                        helperText={this.showError()}
                        type={type}
                        autoFocus={true}
                        fullWidth={fullWidth}
                        margin="normal"
                    />
                    :
                    <TextField
                        {...input}
                        id={id}
                        error={touched && error ? true : false}
                        className={classes.textField}
                        label={this.props.label}
                        helperText={this.showError()}
                        type={type}
                        fullWidth={fullWidth}
                        margin="normal"
                    />
        );
    }
}

export default withStyles(styles)(CustomTextField);
