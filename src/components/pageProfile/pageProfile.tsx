import React from "react";
import "./pageProfile.css";
import ReturnPosts from "../appStartPage/returnPosts";
import { TOFEED } from "../../redux/actions/actionsAppStartPage/actionCreatorAppStartPage";
import ReturnBtnProfile from "./returnBtnProfile";
import { connect } from "react-redux";
import { Istate } from "../appStartPage/IappStartPageInterface";
import { ImapStateToPropsPageProfile } from "./IpageProfileInterface";
import { ADDPOSTBLOCK } from "../../redux/actions/actionsAppStartPage/actionCreatorAppStartPage";
import AddPost from "./addPost";

const PageProfile = (props: any) => {
  const { userProfile, activeUser, changeAddPostBlock } = props;

  if (!userProfile) return null;
  return (
    <div className="appProfile">
      <div className="container">
        <div className="appProfile__title">
          <h5>{userProfile.name}</h5>
          <div
            className="appProfile__btn btn-group"
            role="group"
            aria-label="Basic outlined example"
          >
            <button type="button" className="btn btn-outline-primary">
              Подписок:
              {userProfile.subscription.length === 0
                ? "0"
                : userProfile.subscription.length}
            </button>
            <button type="button" className="btn btn-outline-primary">
              {" "}
              Подписчики:
              {userProfile.subscribers.length === 0
                ? "0"
                : userProfile.subscribers.length}
            </button>
          </div>
          <div>
            {userProfile.name !== activeUser.name ? (
              <ReturnBtnProfile></ReturnBtnProfile>
            ) : null}
          </div>
        </div>
        <ReturnPosts userProfile={true}></ReturnPosts>
        <div
          className="btn-group mt-2"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button
            onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
              props.toFeed(props.history)
            }
            type="button"
            className="btn btn-warning"
          >
            В ленту
          </button>
          {userProfile.name === activeUser.name ? (
            <button
              onClick={changeAddPostBlock}
              type="button"
              className="btn btn-success"
            >
              Добавить пост
            </button>
          ) : null}
        </div>
      </div>
      <AddPost />
    </div>
  );
};
function mapStateToProps(state: Istate): ImapStateToPropsPageProfile {
  return {
    userProfile: state.appStartPageReducer.userProfile,
    activeUser: state.appStartPageReducer.activeUser,
  };
}
function mapDispatchToProps(dispatch: any) {
  return {
    toFeed: (nav: any) => dispatch(TOFEED(nav)),
    changeAddPostBlock: () => dispatch(ADDPOSTBLOCK()),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(PageProfile);
