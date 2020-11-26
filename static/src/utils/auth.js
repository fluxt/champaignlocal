import React from "react";
import { Route, Redirect } from "react-router-dom";

// import jwtDecode from "jwt-decode";
// const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
// const decoded = jwtDecode(token);

export const authContext = React.createContext();

export function useAuth() {
  return React.useContext(authContext);
}

export function ProvideAuth({ children }) {
  const [user, setUser] = React.useState(null);

  const login = async (username, password) => {
    if (username==="username" && password==="password") {
      setUser(username);
      return {'ok': true};
    } else {
      return {'ok': false};
    }
  };

  const logout = async () => {
    setUser(null);
  };

  const auth = {
    user,
    login,
    logout
  };

  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  );
}

export function RouteWithAuth({ ...rest }) {
  const auth = useAuth();
  return (
    auth.user ?
      <Route {...rest} /> :
      <Redirect to={{ pathname: "/users/login", state: { from: rest.path } }} />
  );
}

