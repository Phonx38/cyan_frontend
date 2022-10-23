import {
  GET_COMPANY_REQUEST,
  GET_COMPANY_SUCCESS,
  GET_COMPANY_FAIL,
  ADD_COMPANY_REQUEST,
  ADD_COMPANY_SUCCESS,
  ADD_COMPANY_FAIL,
  ADD_COMPANY_RESET,
  DETAIL_COMPANY_REQUEST,
  DETAIL_COMPANY_SUCCESS,
  DETAIL_COMPANY_FAIL,
  UPDATE_COMPANY_REQUEST,
  UPDATE_COMPANY_SUCCESS,
  UPDATE_COMPANY_RESET,
  UPDATE_COMPANY_FAIL,
} from "../constants/companyConstants";

export const companyListReducer = (state = { companies: [] }, action) => {
  switch (action.type) {
    case GET_COMPANY_REQUEST:
      return { loading: true, success: false, companies: [] };
    case GET_COMPANY_SUCCESS:
      return { loading: false, success: true, companies: action.payload };
    case GET_COMPANY_FAIL:
      return { loading: false, success: false, error: action.payload };
    default:
      return state;
  }
};

export const addCompanyReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_COMPANY_REQUEST:
      return { loading: true, success: false };
    case ADD_COMPANY_SUCCESS:
      return {
        loading: false,
        success: true,
        ...state,
        company: action.payload,
      };
    case ADD_COMPANY_FAIL:
      return { loading: false, success: false, error: action.payload };
    case ADD_COMPANY_RESET:
      return {};
    default:
      return state;
  }
};

export const detailCompanyReducer = (state = { company: {} }, action) => {
  switch (action.type) {
    case DETAIL_COMPANY_REQUEST:
      return { loading: true, ...state };
    case DETAIL_COMPANY_SUCCESS:
      return {
        loading: false,
        success: true,

        company: action.payload,
      };
    case DETAIL_COMPANY_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const updateCompanyReducer = (state = { company: {} }, action) => {
  switch (action.type) {
    case UPDATE_COMPANY_REQUEST:
      return { loading: true, success: false };
    case UPDATE_COMPANY_SUCCESS:
      return {
        loading: false,
        success: true,
        ...state,
        company: action.payload,
      };
    case UPDATE_COMPANY_FAIL:
      return { loading: false, success: false, error: action.payload };
    case UPDATE_COMPANY_RESET:
      return {};
    default:
      return state;
  }
};
