import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";
import {
  addCompanyReducer,
  companyListReducer,
  detailCompanyReducer,
  updateCompanyReducer,
} from "./reducers/companyReducer";

const reducer = combineReducers({
  companyList: companyListReducer,
  addCompany: addCompanyReducer,
  detailsCompany: detailCompanyReducer,
  updateCompany: updateCompanyReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
