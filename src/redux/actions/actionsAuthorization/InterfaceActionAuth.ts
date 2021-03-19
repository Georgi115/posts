import { changeInputFieldName, enterApp, exitApp } from "./typeAction";

export interface IstateAuthorizationReducer {
  inputFieldName: string;
}

export interface IchangeInputFieldNameAction {
  type: typeof changeInputFieldName;
  payload: string;
}

export interface IenterAppAction {
  type: typeof enterApp;
  payload: string;
  event: any;
  nav: any;
}

export interface IexitApp {
  type: typeof exitApp;
}

export type ActionTypes =
  | IchangeInputFieldNameAction
  | IenterAppAction
  | IexitApp;
