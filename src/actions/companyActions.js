import axios from "axios";
import {
  ADD_COMPANY_FAIL,
  ADD_COMPANY_REQUEST,
  ADD_COMPANY_SUCCESS,
  DETAIL_COMPANY_FAIL,
  DETAIL_COMPANY_REQUEST,
  DETAIL_COMPANY_SUCCESS,
  GET_COMPANY_FAIL,
  GET_COMPANY_REQUEST,
  GET_COMPANY_SUCCESS,
  UPDATE_COMPANY_FAIL,
  UPDATE_COMPANY_SUCCESS,
  UPDATE_COMPANY_REQUEST,
} from "../constants/companyConstants";

export const getCompanyList = () => async (dispatch) => {
  try {
    dispatch({ type: GET_COMPANY_REQUEST });

    const { data } = await axios.get("http://localhost:8000/api/");

    dispatch({
      type: GET_COMPANY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_COMPANY_FAIL,
      payload: error.response && error.response.data.message,
    });
  }
};

export const addCompany = (companyData) => async (dispatch) => {
  try {
    dispatch({ type: ADD_COMPANY_REQUEST });

    const { data } = await axios.post(
      "http://localhost:8000/api/",
      companyData
    );

    dispatch({
      type: ADD_COMPANY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADD_COMPANY_FAIL,
      payload: error.response && error.response.data.message,
    });
  }
};

export const getCompanyDetail = (id) => async (dispatch) => {
  try {
    dispatch({ type: DETAIL_COMPANY_REQUEST });

    const { data } = await axios.get(`http://localhost:8000/api/${id}/`);

    dispatch({
      type: DETAIL_COMPANY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DETAIL_COMPANY_FAIL,
      payload: error.response && error.response.data.message,
    });
  }
};

export const updateCompanyDetail = (id, companyData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_COMPANY_REQUEST });

    const { data } = await axios.put(
      `http://localhost:8000/api/${id}/`,
      companyData
    );

    dispatch({
      type: UPDATE_COMPANY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_COMPANY_FAIL,
      payload: error.response && error.response.data.message,
    });
  }
};
