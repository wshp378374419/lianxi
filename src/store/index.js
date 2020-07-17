import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers";
import loggers from "redux-logger";
//
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
export default createStore(reducer, composeEnhancers(applyMiddleware(loggers)));
