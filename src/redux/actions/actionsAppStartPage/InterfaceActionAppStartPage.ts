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
import { IenterAppAction } from "../actionsAuthorization/InterfaceActionAuth";

export type user = {
  name: string;
  active: boolean;
  subscribers: Array<string>;
  subscription: Array<string>;
};

export type post = {
  authorPost: string;
  id: number;
  likePost: Array<string>;
  textPost: string;
};

export interface IstateStartPageReducer {
  activeUser: null | {
    active: boolean;
    name: string;
    subscribers: Array<string>;
    subscription: Array<string>;
  };
  addPostBlock: boolean;
  addPostText: string;
  errorTextBlock: boolean;
  allPosts: Array<any>;
  userProfile: null | {
    active: boolean;
    name: string;
    subscribers: Array<string>;
    subscription: Array<string>;
  };
  users: Array<any>;
  viewPosts: string;
}

export interface IonClickBtnPosts {
  type: typeof onClickBtnPosts;
  payload: string;
}

export interface IexitApp {
  type: typeof exitApp;
  nav: any;
}

export interface IgoToProfile {
  type: typeof goToProfile;
  nav: any;
  user: {
    name: string;
    active: boolean;
    subscribers: Array<string>;
    subscription: Array<string>;
  };
}

export interface IclickLikePost {
  type: typeof clickLikePost;
  activeUser: {
    name: string;
    active: boolean;
    subscribers: Array<string>;
    subscription: Array<string>;
  };
  post: {
    authorPost: string;
    id: number;
    likePost: Array<string>;
    textPost: string;
  };
}

export interface IdeletePost {
  type: typeof deletePost;
  post: {
    authorPost: string;
    id: number;
    likePost: Array<string>;
    textPost: string;
  };
}

export interface ItoFeed {
  type: typeof toFeed;
  nav: any;
}

export interface iChangeSubscribe {
  type: typeof changeSubscription;
  activeUser: {
    name: string;
    active: boolean;
    subscribers: Array<string>;
    subscription: Array<string>;
  };
  userProfile: {
    name: string;
    active: boolean;
    subscribers: Array<string>;
    subscription: Array<string>;
  };
  str: string;
}

export interface iAddPostBlock {
  type: typeof addPostBlock;
}

export interface iChangeAddPostText {
  type: typeof changeAddPostText;
  value: string;
}

export interface iaddPostClick {
  type: typeof addPostClick;
  value: string;
}
export type ActionAppStartReducer =
  | IonClickBtnPosts
  | IdeletePost
  | IclickLikePost
  | IgoToProfile
  | IexitApp
  | IonClickBtnPosts
  | ItoFeed
  | IenterAppAction
  | iChangeSubscribe
  | iChangeAddPostText
  | iAddPostBlock
  | iaddPostClick;
