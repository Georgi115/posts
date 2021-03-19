import React from "react";
import { connect } from "react-redux";
import { CHANGEINPUTFIELDNAME } from "../../redux/actions/actionsAuthorization/actionCreatorAuth";
import { ENTERAPP } from "../../redux/actions/actionsAuthorization/actionCreatorAuth";
import { ImapStateToPropsAuth, Istate } from "./IauthorizationInterface";
import "./authorization.css";

const AuthorizationPage = (props: any) => {
  if (props.inputFieldName !== "".trim()) {
    props.enterApp(props.inputFieldName, "", props.history);
  }
  return (
    <div className="authorization">
      <div className="container ">
        <form
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
            props.enterApp(props.inputFieldName, e, props.history);
          }}
        >
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Введите имя</label>
            <input
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                props.changeInputFieldName(e.target.value)
              }
              value={props.inputFieldName}
              type="name"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <small id="emailHelp" className="form-text text-muted">
              Максимальная длина имени - 12 символов. Минимальная длина -3
              символа.
            </small>
          </div>
          <button
            type="submit"
            className={
              props.inputFieldName.length > 2
                ? "btn btn-primary"
                : "btn btn-link"
            }
          >
            Продолжить
          </button>
        </form>
      </div>
    </div>
  );
};

function mapStateToProps(state: Istate): ImapStateToPropsAuth {
  return {
    inputFieldName: state.authorizationReducer.inputFieldName,
  };
}
function mapDispatchToProps(dispatch: any) {
  return {
    changeInputFieldName: (name: string) =>
      dispatch(CHANGEINPUTFIELDNAME(name)),
    enterApp: (name: string, e: any, nav: any) =>
      dispatch(ENTERAPP(name, e, nav)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(AuthorizationPage);
