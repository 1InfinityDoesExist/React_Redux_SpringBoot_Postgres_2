import {
  GET_ERROR,
  GET_AADHAR_CARD,
  GET_AADHAR_CARDS,
  DELETE_AADHAR_CARD
} from "../Actions/types";
import axios from "axios";

export const addAadharCard = (aadharCard, history) => async dispatch => {
  try {
    await axios.post(
      "http://localhost:8312/api/object/aadhar/create",
      aadharCard
    );
    history.push("/");
    dispatch({
      type: GET_ERROR,
      payload: {}
    });
  } catch (error) {
    dispatch({
      type: GET_ERROR,
      payload: error.response.data
    });
  }
};

export const getAadharCardByID = pt_id => async dispatch => {
  try {
    const res = await axios.get(
      "http://localhost:8312/api/object/aadhar/get/" + pt_id
    );
    dispatch({
      type: GET_AADHAR_CARD,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: GET_AADHAR_CARD,
      payload: {}
    });
  }
};

export const getAllAadharCard = () => async dispatch => {
  try {
    const res = await axios.get("http://localhost:8312/api/object/aadhar/get");
    dispatch({
      type: GET_AADHAR_CARDS,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: GET_AADHAR_CARDS,
      payload: {}
    });
  }
};

export const deleteAadharCard = pt_id => async dispatch => {
  try {
    if (window.confirm("Are You Sure You Want To Delete")) {
      await axios.delete(
        "http://localhost:8312/api/object/aadhar/delete/" + pt_id
      );
      dispatch({
        type: DELETE_AADHAR_CARD,
        payload: pt_id
      });
    }
  } catch (error) {
    dispatch({
      type: DELETE_AADHAR_CARD,
      payload: {}
    });
  }
};
