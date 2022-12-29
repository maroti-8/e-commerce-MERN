import axios from "axios";
import {
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  ALL_PRODUCT_FAIL,
  CLEAR_ERRORS,
} from "../constants/productConstants";

export const getProduct = () => async (disspatch) => {
  try {
    disspatch({
      type: ALL_PRODUCT_REQUEST,
    });
    const { data } = await axios.get("/api/v1/products");

    disspatch({ type: ALL_PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    disspatch({
      type: ALL_PRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clearing Errors
export const clearErrors = () => async (disspatch) => {
  disspatch({ type: CLEAR_ERRORS });
};
