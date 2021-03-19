export interface Istate {
  appStartPageReducer: {
    activeUser: {
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
      name: string;
      active: boolean;
      subscribers: Array<string>;
      subscription: Array<string>;
    };
    users: Array<any>;
    viewPosts: string;
  };
  authorizationReducer: {
    inputFieldName: string;
  };
}

export interface ImapStateToPropAppStartPage {
  activeUser: {
    name: string;
    active: boolean;
    subscribers: Array<string>;
    subscription: Array<string>;
  };
  posts: Array<any>;
  viewPosts: string;
}
