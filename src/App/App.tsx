import React from "react";
import AuthorizationPage from "../components/authorizationPage/authorizationPage";
import AppStartPage from "../components/appStartPage/appStartPage";
import PageProfile from "../components/pageProfile/pageProfile";
import { Route } from "react-router-dom";
import { withRouter } from "react-router-dom";

const App: React.FC = (props) => {
  return (
    <div className="App">
      <Route
        exact
        path="/"
        render={() => <AuthorizationPage {...props} />}
      ></Route>
      <Route
        path="/startPage"
        render={() => <AppStartPage {...props}></AppStartPage>}
      ></Route>
      <Route
        path="/profile"
        render={() => <PageProfile {...props}></PageProfile>}
      ></Route>
    </div>
  );
};
export default withRouter(App);
