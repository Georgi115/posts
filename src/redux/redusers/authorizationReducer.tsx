import { changeInputFieldName } from "../actions/actionsAuthorization/typeAction";
import { enterApp, exitApp } from "../actions/actionsAuthorization/typeAction";
import {
  IstateAuthorizationReducer,
  ActionTypes,
} from "../actions/actionsAuthorization/InterfaceActionAuth";

const localState = localStorage.getItem("state");

let initialState: IstateAuthorizationReducer;
if (localState) {
  initialState = JSON.parse(localState).authorizationReducer;
} else {
  initialState = {
    inputFieldName: "",
  };
}

function AuthorizationReducer(state = initialState, action: ActionTypes) {
  switch (action.type) {
    case changeInputFieldName:
      if (action.payload.length === 13) {
        return {
          ...state,
        };
      }
      let name = "";
      if (action.payload !== "".trim()) {
        name = action.payload[0].toUpperCase() + action.payload.slice(1);
      }

      return {
        ...state,
        inputFieldName: name,
      };
    case enterApp:
      if (action.event.type === "submit") {
        action.event.preventDefault();
        if (action.payload.length > 2) {
          action.nav.push("/startPage");
          return { ...state };
        }
      }

      return {
        ...state,
      };
    case exitApp:
      return { ...state, inputFieldName: "" };
    default:
      return state;
  }
}

export default AuthorizationReducer;
