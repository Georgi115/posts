import {
  onClickBtnPosts,
  clickLikePost,
  exitApp,
  deletePost,
  goToProfile,
  toFeed,
  changeSubscription,
  addPostBlock,
  changeAddPostText,
  addPostClick,
} from "./typeAction";

import {
  IonClickBtnPosts,
  IexitApp,
  IgoToProfile,
  IclickLikePost,
  IdeletePost,
  ItoFeed,
  user,
  post,
  iChangeSubscribe,
  iAddPostBlock,
  iChangeAddPostText,
  iaddPostClick,
} from "./InterfaceActionAppStartPage";

export const ONCLICKBTNPOSTS = (optionPosts: string): IonClickBtnPosts => {
  return {
    type: onClickBtnPosts,
    payload: optionPosts,
  };
};

export const CLICKLIKEPOST = (activeUser: user, post: post): IclickLikePost => {
  return {
    type: clickLikePost,
    activeUser,
    post,
  };
};

export const EXITAPP = (nav: any): IexitApp => {
  return {
    type: exitApp,
    nav,
  };
};

export const DELETEPOST = (post: post): IdeletePost => {
  return {
    type: deletePost,
    post,
  };
};

export const GOTOPROFILE = (nav: any, user: user): IgoToProfile => {
  return {
    type: goToProfile,
    nav,
    user,
  };
};

export const TOFEED = (nav: any): ItoFeed => {
  return {
    type: toFeed,
    nav,
  };
};

export const CHANGESUBSCRIPTION = (
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
): iChangeSubscribe => {
  return {
    type: changeSubscription,
    activeUser,
    userProfile,
    str,
  };
};

export const ADDPOSTBLOCK = (): iAddPostBlock => {
  return {
    type: addPostBlock,
  };
};

export const CHANGEADDPOSTTEXT = (value: string): iChangeAddPostText => {
  return {
    type: changeAddPostText,
    value,
  };
};

export const ADDPOSTCLICK = (value: string): iaddPostClick => {
  return {
    type: addPostClick,
    value,
  };
};
