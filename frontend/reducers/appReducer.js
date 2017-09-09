import {
    LOGIN_SUCCESSFUL,
    LOGIN_REQUEST_ERROR,
    ADD_REQUEST,
    REMOVE_REQUEST
} from "../actions/appActions";

const initialState = {
    logged: false,
    wrongPasswordOrLoginEntered: false,
    isLoading: false,
    requestsCount: 0
};

export default function appReducer(state = initialState, action) {
    
    switch (action.type) {

    	case LOGIN_SUCCESSFUL: {

            const {data} = action;

            let logged = false;
            let wrongPasswordOrLoginEntered = false;

            if (data.Auth === "Logged")
                logged = true;
            else
                wrongPasswordOrLoginEntered = true;
            
            return Object.assign({}, state, {
                logged: logged,
                wrongPasswordOrLoginEntered: wrongPasswordOrLoginEntered 
            })
        }

        case ADD_REQUEST: {

            let newRequestsCount = state.requestsCount + 1;

            return Object.assign({}, state, {
                requestsCount: newRequestsCount,
                isLoading: true
            });
        }

        case REMOVE_REQUEST: {
           
            let newRequestsCount = state.requestsCount - 1;

            if (newRequestsCount < 0)
                newRequestsCount = 0;

            let isLoading;

            if (newRequestsCount === 0)
                isLoading = false;
            else
                isLoading = true;

            return Object.assign({}, state, {
                requestsCount: newRequestsCount,
                isLoading: isLoading
            });

        }

    	case LOGIN_REQUEST_ERROR: {

            console.log("LOGIN_REQUEST_ERROR");

            return state;
        }

        default: {
            return state;        
        }
    }
}