import React from "react";
import { connect } from "react-redux";
import { Istate } from "../appStartPage/IappStartPageInterface";
import { ImapStateToPropsAddPost } from "./IpageProfileInterface";
import {
  ADDPOSTBLOCK,
  CHANGEADDPOSTTEXT,
  ADDPOSTCLICK,
} from "../../redux/actions/actionsAppStartPage/actionCreatorAppStartPage";

const AddPost = (props: any) => {
  const {
    postBlock,
    changeAddPostBlock,
    textPost,
    changeTextPost,
    addPostClick,
    error,
  } = props;
  return (
    <div className={postBlock ? "addPost appPost__view" : "addPost"}>
      <div className="addPost__close">
        <i onClick={changeAddPostBlock} className="fa fa-close fa-2x"></i>
      </div>
      <div className="addPost__input">
        <div className="container">
          <textarea
            className={error ? "errorInp" : undefined}
            onChange={(e) => changeTextPost(e.target.value)}
            value={textPost}
            placeholder={
              error ? "Текст поста не может быть пустым" : "Введите текст поста"
            }
          ></textarea>
          <button
            onClick={() => addPostClick(textPost)}
            type="button"
            className="btn btn-success"
          >
            Опубликовать
          </button>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state: Istate): ImapStateToPropsAddPost {
  return {
    postBlock: state.appStartPageReducer.addPostBlock,
    textPost: state.appStartPageReducer.addPostText,
    error: state.appStartPageReducer.errorTextBlock,
  };
}
function mapDispatchToProps(dispatch: any) {
  return {
    changeAddPostBlock: () => dispatch(ADDPOSTBLOCK()),
    changeTextPost: (value: string) => dispatch(CHANGEADDPOSTTEXT(value)),
    addPostClick: (value: string) => dispatch(ADDPOSTCLICK(value)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);
