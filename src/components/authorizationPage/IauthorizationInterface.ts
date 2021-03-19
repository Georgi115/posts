export interface ImapStateToPropsAuth {
  inputFieldName: string;
}

export interface Istate {
  appStartPageReducer: {
    activeUser: {
      active: boolean;
      likePost: Array<string>;
      name: string;
      subscribers: Array<string>;
      subscription: Array<string>;
    };
    allPosts: Array<any>;
    userProfile: null | object;
    users: Array<any>;
    viewPosts: string;
  };
  authorizationReducer: {
    inputFieldName: string;
  };
}
