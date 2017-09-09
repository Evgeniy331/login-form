import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../actions/appActions";


class LoginPage extends Component {

    render() {
        
        const { wrongPasswordOrLoginEntered, isLoading } = this.props.stateFromReducer;

        return (      
            <div className="container">
                <div className="row" id="pwd-container">                    
                    <div className="col-md-4"></div>             
                    <div className="col-md-4">            
                        <section className="login-form">             
                            <form method="post" action="#" role="login" autoComplete="off">  
                                <p className="aligner login-header">
                                    <span className="glyphicon glyphicon-fire orange"></span>
                                    <span className="text">Login</span>
                                </p>                       
                                <div className={"control-group " + (wrongPasswordOrLoginEntered ? "has-error" : "")}>
                                    <input  className="form-control input-lg"
                                            ref={(input) => { this.loginInpt = input; }} 
                                            type="text" 
                                            autoComplete="off"  
                                            id="login" 
                                            placeholder="Email" 
                                            required />            
                                </div>
                                <div className="control-group">
                                    <input  type="password"
                                            ref={(input) => { this.passwordInpt = input; }}
                                            autoComplete="new-password" 
                                            className="form-control input-lg" 
                                            id="password" 
                                            placeholder="Password" 
                                            required />                                                                     
                                </div>
                                <p className="text-center">
                                    <button type="submit"
                                            onClick={this.authorization} 
                                            ref={(btn) => { this.submitBtn = btn; }}
                                            name="go" 
                                            id="submit-btn" 
                                            className="btn btn-default round transparent-btn">
                                                <span className={"" + (isLoading ? "not-display" : "")}>
                                                    Login
                                                </span>
                                                <span className={"fa " +  (isLoading ? "fa-cog fa-spin" : "fa-long-arrow-right")}></span>
                                    </button>
                                </p>                    
                            </form>
                        </section> 
                    </div>                
                    <div className="col-md-4"></div>               
                </div>
            </div>
        );
    }

    authorization = event => {

        event.preventDefault();

        this.submitBtn.blur();

        let login = this.loginInpt.value;
        let password = this.passwordInpt.value;

        this.props.sendLoginRequest({login: login, password: password});
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
const LoginPageConected = connect(mapStateToProps, mapDispatchToProps)(LoginPage);
export default LoginPageConected;