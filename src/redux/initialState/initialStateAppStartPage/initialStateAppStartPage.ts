export const initialState = {
  userProfile: null,
  activeUser: null,
  viewPosts: "allPosts",
  addPostBlock: false,
  errorTextBlock: false,
  addPostText: "",
  users: [
    {
      id: 0,
      name: "Вася",
      subscription: ["Кирилл"],
      subscribers: ["Иван"],
      active: false,
    },
    {
      id: 1,
      name: "Кирилл",
      subscription: ["Иван"],
      subscribers: ["Вася"],
      active: false,
    },
    {
      id: 2,
      name: "Иван",
      subscription: ["Вася"],
      subscribers: ["Кирилл"],
      active: false,
    },
  ],
  allPosts: [
    {
      id: 0,
      textPost: "Привет я работаю в quizLab",
      authorPost: "Вася",
      likePost: ["Кирилл"],
    },

    {
      id: 1,
      textPost: "Привет Угадайте мальчик я или девочка",
      authorPost: "Кирилл",
      likePost: ["Вася"],
    },

    {
      id: 2,
      textPost: "Привет я лишился работы",
      authorPost: "Иван",
      likePost: ["Вася"],
    },
  ],
};
