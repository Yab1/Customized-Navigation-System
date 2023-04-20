import { createContext, useState } from "react";

const UserContext = createContext();

export default function UserContextProvide({ children }) {
  const [state, setState] = useState({
    isLoggedIn: false,
    currentUser: [],
    users: [],
    products:[]
  });
  
  return <UserContext.Provider value={state}>{children}</UserContext.Provider>;
}
