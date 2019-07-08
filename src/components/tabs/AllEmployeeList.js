import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TablePagination from '@material-ui/core/TablePagination';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { connect } from "react-redux";
import MainWrapper from "../wrappers/MainWrapper";
import CircularProgress from '@material-ui/core/CircularProgress';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import CustomTextField from "../fields/CustomTextField";
import CheckboxGroup from "../fields/CheckboxGroup";
import { reduxForm, Field, reset } from "redux-form"; 
import { fetchallemployee} from "../../actions";
import Snackbar from '@material-ui/core/Snackbar'; 
import PlusCircleIcon from '@material-ui/icons/AddCircle';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
//import SearchIcon from '@material-ui/icons/Search'; 
import ReactTable from 'react-table';

import 'react-table/react-table.css';

function getModalStyle() {
    return {
        top: `${50}%`,
        left: `${50}%`,
        transform: `translate(-${50}%, -${50}%)`,
    };
}

const WAIT_INTERVAL = 1000;

class AllEmployeeList extends React.Component {
    state = {
        loading: false
    };

    constructor(props, context) {
        super(props, context);
        this.state = {
            selected: [],
            open: false,
            isSwitchSnackbarOn: false,
            fetchdata: [],
            page: 0,
            rowsPerPage: 5,
            offset: 0,
            searchVal: "",
            countUsers: 0,
        };
        
    }

    componentWillMount() {
        this.setState({ loading: true });
       // this.props.countuser(this.state.searchVal)
        this.props.fetchallemployee();
        this.setState({ loading: false });
    }

    componentWillReceiveProps(nextprop) {
        console.log(nextprop)
        if (nextprop.fetchdata != this.state.fetchdata) {
            this.setState({ fetchdata: nextprop.fetchdata.fetch });
        }
    }


    componentDidMount(){

    }
    /*
    handleModalOpen = (id, username) => {
        this.updateSnackbarStatusFalse();
        this.setState({
            id: id,
            username: username,
            open: true,
        });
    };
*/
    handleModalClose = () => {
        this.setState({ open: false });
        this.props.reset();
    };
/*
    handleActive = () => {
        this.updateSnackbarStatusFalse();
        this.props.updateuserstoactive(this.state.selected, this.state.searchVal, this.setNewOffset(this.state.rowsPerPage, this.state.page), this.state.rowsPerPage);
    };

    handleInactive = () => {
        this.updateSnackbarStatusFalse();
        this.props.updateuserstoinactive(this.state.selected, this.state.searchVal, this.setNewOffset(this.state.rowsPerPage, this.state.page), this.state.rowsPerPage );
    };
*/
/*
    handleChangePage = (event, page) => {
        this.updateSnackbarStatusFalse();
        this.props.fetchUser(this.state.searchVal,this.setNewOffset(this.state.rowsPerPage, page), this.state.rowsPerPage);
        this.setState({ page });
    };
*/
/*
    handleChangeRowsPerPage = event => {
        this.updateSnackbarStatusFalse();
        this.props.fetchUser(this.state.searchVal,this.setNewOffset(event.target.value, this.state.page), event.target.value);
        this.setState({ rowsPerPage: event.target.value });
    };

    setNewOffset = (rowPerPage, page) => {
        return rowPerPage * page;
    }

    handleSearch = event => {
        this.updateSnackbarStatusFalse();   
        this.setState({ searchVal: event.target.value })
        let that = this;
        clearTimeout(this.timer);
        this.timer = setTimeout(function () {
            that.props.fetchUser(that.state.searchVal, 0, that.state.rowsPerPage);
            that.setState({ page: 0 });
        }, WAIT_INTERVAL);
    };
*/
    render() {
        if (this.state.loading) {
            return (
                <div className="d-flex justify-content-center">
                    <CircularProgress color="primary" size={70} thickness={7} />
                </div>
            );
        }

        const { classes } = this.props;
        const { fetchdata } = this.state;
        
        const columnData = [
            { Header: 'ID',accessor: 'id'},
            { Header: 'employee_name',accessor: 'employee_name'}
            ,{ Header: 'employee_age', accessor:'employee_age'},
            { Header: 'employee_salary',accessor: 'employee_salary'}];
        return (
            <MainWrapper
            history={this.props.history}
                isDisplayOn="none" >
                <Paper  >
                  
                <ReactTable 
                data={fetchdata} 
                columns = {columnData}
                showPagination={true}
                resizable={false}
                SubComponent={
                    this.props.expand
                      ? row => (
                          <div>
                            <h1>expanded state</h1>
                          </div>
                        )
                      : false
                  }
 
                />
                   
                </Paper>
                
            </MainWrapper>
        );
        
    }
}

function validate(values) {
    const errors = {};
 

    return errors;
}

let LoadAllWithStyles_ =  AllEmployeeList;

 LoadAllWithStyles_ = reduxForm({
    validate,
    form: "FetchALlForm"
})(LoadAllWithStyles_);

const mapStateToProps = ({ fetchall }) => {
    return {
        fetchdata: fetchall,
    };
};

export default connect(
    mapStateToProps,
    { fetchallemployee }
)(LoadAllWithStyles_);
