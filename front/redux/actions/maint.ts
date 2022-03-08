import * as t from "../types";
import { Dispatch } from "redux";

export const setInfo = (name: string) => (dispatch: Dispatch) => {
  dispatch({
    type: t.SET_NAME,
    payload: name,
  });
};
