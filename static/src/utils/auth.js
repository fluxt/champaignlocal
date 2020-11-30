import React from "react";
import { Route, Redirect } from "react-router-dom";

export const authContext = React.createContext();

export function useAuth() {
  return React.useContext(authContext);
}

export function ProvideAuth({ children }) {
  const [user, setUser] = React.useState(null);
  const [groups, setGroups] = React.useState([]);
  const [token, setToken] = React.useState(null);

  const register = async (displayname, username, password) => {
    const response = await fetch( "/api/users/register", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        displayname, username, password
      })
    });
    const payload = await response.json();
    return payload.ok;
  }

  const login = async (username, password) => {
    const response = await fetch( "/api/users/login", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username, password
      })
    });
    const payload = await response.json();
    if (payload.ok) {
      setUser(payload.username);
      setGroups(payload.groups);
      setToken(payload.token);
    }
    return payload.ok;
  };

  const logout = async () => {
    setUser(null);
    setGroups([]);
    setToken(null);
  };

  const auth = {
    user,
    groups,
    token,
    register,
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

