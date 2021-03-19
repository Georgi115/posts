import { changeInputFieldName, enterApp, exitApp } from "./typeAction";
import {
  IchangeInputFieldNameAction,
  IenterAppAction,
  IexitApp,
} from "./InterfaceActionAuth";

export const CHANGEINPUTFIELDNAME = (
  name: string
): IchangeInputFieldNameAction => {
  return {
    type: changeInputFieldName,
    payload: name,
  };
};

export const ENTERAPP = (
  name: string,
  event: any,
  nav: any
): IenterAppAction => {
  return {
    type: enterApp,
    payload: name,
    event,
    nav,
  };
};

export const EXITAPP = (): IexitApp => {
  return {
    type: exitApp,
  };
};
