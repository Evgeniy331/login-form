import React from "react"
import { render } from "react-dom"
import LoginForm from "./containers/login-form"
import App from "./components/app"

import {IndexRoute, Route, Router, browserHistory} from "react-router";

import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import logger from "redux-logger"
import thunk from "redux-thunk"

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";

import reducer from "./reducers/appReducer"

const middleware = [ thunk ]

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

render(
    (<Provider store={store}>
    	<Router history={browserHistory}>
	        <Route path="/" component={App}>
		         <IndexRoute component={LoginForm} />
	        </Route>
	    </Router>
    </Provider>)
    , document.getElementById("root")
)