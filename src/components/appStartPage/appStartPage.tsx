import React from "react";
import { connect } from "react-redux";
import "./appStartPage.css";
import { ONCLICKBTNPOSTS } from "../../redux/actions/actionsAppStartPage/actionCreatorAppStartPage";
import { EXITAPP } from "../../redux/actions/actionsAppStartPage/actionCreatorAppStartPage";
import { GOTOPROFILE } from "../../redux/actions/actionsAppStartPage/actionCreatorAppStartPage";
import { Istate, ImapStateToPropAppStartPage } from "./IappStartPageInterface";
import ReturnPosts from "./returnPosts";

const AppStartPage = (props: any) => {
  const { viewPosts } = props;
  const { onClickBtnPosts } = props;
  const { activeUser } = props;

  return (
    <div className="container appStartPage pt-4">
      <div className="appStartPage__btn">
        <div
          className="btn-group w-100"
          role="group"
          aria-label="Basic example"
        >
          <button
            onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
              onClickBtnPosts("allPosts")
            }
            type="button"
            className={
              viewPosts === "allPosts"
                ? "btn btn-primary"
                : " btn btn-outline-secondary"
            }
          >
            {" "}
            Все посты{" "}
          </button>

          <button
            onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
              onClickBtnPosts("subscribersPosts")
            }
            type="button"
            className={
              viewPosts === "subscribersPosts"
                ? "btn btn-primary"
                : " btn btn-outline-secondary"
            }
          >
            {" "}
            Подписки{" "}
          </button>
        </div>
      </div>
      <ReturnPosts nav={props.history}></ReturnPosts>
      <div className="AppStartPage__btn">
        {" "}
        <button
          onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
            props.goToProfile(props.history, activeUser)
          }
          type="button"
          className="btn btn-secondary btn-lg  mt-4"
        >
          В профиль
        </button>
        <button
          onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
            props.exitApp(props.history)
          }
          type="button"
          className="btn btn-secondary btn-lg  mt-4"
        >
          Выйти
        </button>
      </div>
    </div>
  );
};

function mapStateToProps(state: Istate): ImapStateToPropAppStartPage {
  return {
    posts: state.appStartPageReducer.allPosts,
    viewPosts: state.appStartPageReducer.viewPosts,
    activeUser: state.appStartPageReducer.activeUser,
  };
}
function mapDispatchToProps(dispatch: any) {
  return {
    onClickBtnPosts: (optionPosts: string) =>
      dispatch(ONCLICKBTNPOSTS(optionPosts)),
    exitApp: (nav: any) => dispatch(EXITAPP(nav)),
    goToProfile: (nav: any, user: any) => dispatch(GOTOPROFILE(nav, user)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppStartPage);
