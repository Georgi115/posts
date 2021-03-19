import React from "react";
import { connect } from "react-redux";
import { Istate } from "../appStartPage/IappStartPageInterface";
import { ImapStateToPropsPageProfile } from "./IpageProfileInterface";
import { CHANGESUBSCRIPTION } from "../../redux/actions/actionsAppStartPage/actionCreatorAppStartPage";

const ReturnBtnProfile = (props: any) => {
  const { activeUser, userProfile, changeSubscription } = props;
  const findUser = activeUser.subscription.find(
    (el: string) => el === userProfile.name
  );

  return (
    <>
      {findUser ? (
        <button
          onClick={() =>
            changeSubscription(activeUser, userProfile, "unsubscribe")
          }
          type="button"
          className="btn btn-success w-100 mt-2"
        >
          Отписаться
        </button>
      ) : (
        <button
          onClick={() =>
            changeSubscription(activeUser, userProfile, "subscribe")
          }
          type="button"
          className="btn btn-success w-100 mt-2"
        >
          Подписаться
        </button>
      )}
    </>
  );
};

function mapStateToProps(state: Istate): ImapStateToPropsPageProfile {
  return {
    activeUser: state.appStartPageReducer.activeUser,
    userProfile: state.appStartPageReducer.userProfile,
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    changeSubscription: (
      activeUser: {
        name: string;
        active: boolean;
        subscribers: Array<string>;
        subscription: Array<string>;
      },
      userProfile: {
        name: string;
        active: boolean;
        subscribers: Array<string>;
        subscription: Array<string>;
      },
      str: string
    ) => {
      dispatch(CHANGESUBSCRIPTION(activeUser, userProfile, str));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ReturnBtnProfile);
