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
import { fetchsingleemployee} from "../../actions";
import Snackbar from '@material-ui/core/Snackbar'; 
import PlusCircleIcon from '@material-ui/icons/AddCircle';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search'; 
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

class SingleEmployeeList extends React.Component {
    state = {
        loading: false
    };

    constructor(props, context) {
        super(props, context);
        this.state = {
            selected: [],
            open: false,
            isSwitchSnackbarOn: false,
            fetchSingledata: [],
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
        this.props.fetchsingleemployee(this.state.searchVal);
        this.setState({ loading: false });
    }

    componentWillReceiveProps(nextprop) {
        console.log(nextprop)
        if (nextprop.fetchSingledata != this.state.fetchSingledata) {
            this.setState({ fetchSingledata: nextprop.fetchSingledata.fetchsingle });
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

    
    
*/
   handleSearch = event => {
   // this.updateSnackbarStatusFalse();   
   console.log(event.target.value)
    this.setState({ searchVal: event.target.value })
    let that = this;
    clearTimeout(this.timer);
    this.timer = setTimeout(function () {
        that.props.fetchsingleemployee(that.state.searchVal);
        that.setState({ page: 0 });
    }, WAIT_INTERVAL);
};


    render() {
        if (this.state.loading) {
            return (
                <div className="d-flex justify-content-center">
                    <CircularProgress color="primary" size={70} thickness={7} />
                </div>
            );
        }

        
    

        const { classes } = this.props;
        const { fetchSingledata } = this.state;
        const columnData = [
            { Header: 'ID',accessor: 'id'},
            { Header: 'employee_name',accessor: 'employee_name'},
            { Header: 'employee_age', accessor:'employee_age'},
            { Header: 'employee_salary',accessor: 'employee_salary'}];
        return (
            <MainWrapper
            history={this.props.history}
                isDisplayOn="none" >

        <Grid container spacing={8} alignItems="flex-end">
            <Grid item>
                <SearchIcon />
            </Grid>
            <Grid item>
                <TextField
                    id="input-with-icon-grid"
                    label="ID"
                    onChange={ (e) => this.handleSearch(e) }
                />
            </Grid>
        </Grid>
    
             
                <Paper  >

                
                <ReactTable 
                data={fetchSingledata} 
                columns = {columnData}
                showPagination={true}
                resizable={false}
                defaultPageSize={5}
                showPageSizeOptions={false}
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

let LoadAllWithStyles =  SingleEmployeeList;

 LoadAllWithStyles = reduxForm({
    validate,
    form: "FetchSingleForm"
})(LoadAllWithStyles);

const mapStateToProps = ({ fetchsingle }) => { console.log(fetchsingle)
    return {
        fetchSingledata: fetchsingle,
    };
};

export default connect(
    mapStateToProps,
    { fetchsingleemployee }
)(LoadAllWithStyles);
