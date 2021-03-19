import React from "react";
import { connect } from "react-redux";
import { CLICKLIKEPOST } from "../../redux/actions/actionsAppStartPage/actionCreatorAppStartPage";
import { DELETEPOST } from "../../redux/actions/actionsAppStartPage/actionCreatorAppStartPage";
import { GOTOPROFILE } from "../../redux/actions/actionsAppStartPage/actionCreatorAppStartPage";
import { Istate } from "./IappStartPageInterface";
import { ImapStateToPropsReturnPosts, Ipost } from "./IreturnPostInterfact";
import { user } from "../../redux/actions/actionsAppStartPage/InterfaceActionAppStartPage";

const ReturnPosts = (props: any) => {
  if (props.userProfile) {
    return props.posts.map((post: Ipost) => {
      const like = post.likePost.find(
        (el: string) => el === props.activeUser.name
      );

      if (post.authorPost === props.userProfile.name) {
        return (
          <div key={post.id} className="card mt-2" style={{ width: " 100%" }}>
            <div className="card-body">
              <div className="title-card">
                <h5>{post.authorPost}</h5>
                <div>
                  {post.authorPost === props.activeUser.name ? (
                    <i
                      onClick={(e: React.MouseEvent<HTMLElement>) =>
                        props.deletePost(post)
                      }
                      className="fa fa-close fa-2x"
                    ></i>
                  ) : null}
                  {like !== undefined ? (
                    <i
                      onClick={(e: React.MouseEvent<HTMLElement>) =>
                        props.clickLikePost(props.activeUser, post)
                      }
                      className="fa fa-heart fa-2x"
                    ></i>
                  ) : (
                    <i
                      onClick={(e: React.MouseEvent<HTMLElement>) =>
                        props.clickLikePost(props.activeUser, post)
                      }
                      className="fa fa-heart-o fa-2x"
                    ></i>
                  )}
                </div>
              </div>

              <p className="card-text">{post.textPost}</p>
              <h6 className="card-subtitle mb-2 text-muted">
                Понравилось: {post.likePost.join(",")}
              </h6>
            </div>
          </div>
        );
      }
    });
  }
  if (props.viewPosts === "allPosts") {
    return props.posts.map((post: Ipost, idx: number) => {
      const like = post.likePost.find(
        (el: string) => el === props.activeUser.name
      );
      const findUser = props.users.find(
        (el: user) => el.name === post.authorPost
      );
      return (
        <div key={post.id} className="card mt-2" style={{ width: " 100%" }}>
          <div className="card-body">
            <div className="title-card">
              <h5
                onClick={() => props.goToProfile(props.nav, findUser)}
                className="card-title"
              >
                {post.authorPost}
              </h5>
              <div>
                {post.authorPost === props.activeUser.name ? (
                  <i
                    onClick={(e: React.MouseEvent<HTMLElement>) =>
                      props.deletePost(post)
                    }
                    className="fa fa-close fa-2x"
                  ></i>
                ) : null}
                {like !== undefined ? (
                  <i
                    onClick={(e: React.MouseEvent<HTMLElement>) =>
                      props.clickLikePost(props.activeUser, post)
                    }
                    className="fa fa-heart fa-2x"
                  ></i>
                ) : (
                  <i
                    onClick={(e: React.MouseEvent<HTMLElement>) =>
                      props.clickLikePost(props.activeUser, post)
                    }
                    className="fa fa-heart-o fa-2x"
                  ></i>
                )}
              </div>
            </div>

            <p className="card-text">{post.textPost}</p>
            <h6 className="card-subtitle mb-2 text-muted">
              Понравилось: {post.likePost.join(",")}
            </h6>
          </div>
        </div>
      );
    });
  }

  return props.posts.map((post: Ipost) => {
    return props.activeUser.subscription.map((name: string, idx: number) => {
      const like = post.likePost.find(
        (el: string) => el === props.activeUser.name
      );
      const findUser = props.users.find(
        (el: user) => el.name === post.authorPost
      );
      if (post.authorPost === name) {
        return (
          <div key={post.id} className="card mt-2" style={{ width: " 100%" }}>
            <div className="card-body">
              <div className="title-card">
                <h5
                  onClick={(e: React.MouseEvent<HTMLElement>) =>
                    props.goToProfile(props.nav, findUser)
                  }
                  className="card-title"
                >
                  {post.authorPost}
                </h5>
                {like ? (
                  <i
                    onClick={(e: React.MouseEvent<HTMLElement>) =>
                      props.clickLikePost(props.activeUser, post)
                    }
                    className="fa fa-heart fa-2x"
                  ></i>
                ) : (
                  <i
                    onClick={(e: React.MouseEvent<HTMLElement>) =>
                      props.clickLikePost(props.activeUser, post)
                    }
                    className="fa fa-heart-o fa-2x"
                  ></i>
                )}
              </div>

              <p className="card-text">{post.textPost}</p>
              <h6 className="card-subtitle mb-2 text-muted">
                Понравилось: {post.likePost.join(",")}
              </h6>
            </div>
          </div>
        );
      }
    });
  });
};
function mapStateToProps(state: Istate): ImapStateToPropsReturnPosts {
  return {
    viewPosts: state.appStartPageReducer.viewPosts,
    posts: state.appStartPageReducer.allPosts,
    activeUser: state.appStartPageReducer.activeUser,
    userProfile: state.appStartPageReducer.userProfile,
    users: state.appStartPageReducer.users,
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    clickLikePost: (aciveUser: user, post: Ipost) =>
      dispatch(CLICKLIKEPOST(aciveUser, post)),
    deletePost: (post: Ipost) => dispatch(DELETEPOST(post)),
    goToProfile: (nav: any, user: user) => dispatch(GOTOPROFILE(nav, user)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ReturnPosts);
