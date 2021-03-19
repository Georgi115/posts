export interface ImapStateToPropsReturnPosts {
  viewPosts: string;
  posts: Array<any>;
  activeUser: {
    name: string;
    active: boolean;
    subscribers: Array<string>;
    subscription: Array<string>;
  };
  userProfile: null | {
    name: string;
    active: boolean;
    subscribers: Array<string>;
    subscription: Array<string>;
  };
  users: Array<any>;
}

export interface Ipost {
  authorPost: string;
  id: number;
  likePost: Array<string>;
  textPost: string;
}
