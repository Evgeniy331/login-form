import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../actions/appActions";

import LoginPage from "../components/login-page";
import Logged from "./logged";

class LoginForm extends Component {

    render() {

        const { logged } = this.props.stateFromReducer;

        if (!logged)
            return (<LoginPage/>);

        return (<Logged/>);

    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

function mapStateToProps(state) {
    return {
        stateFromReducer: state
    };
}
const LoginFormConected = connect(mapStateToProps, mapDispatchToProps)(LoginForm);
export default LoginFormConected;