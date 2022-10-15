import { createContext, useState } from "react";

const AuthContext = createContext({})

export const AuthContextProvider = ({children}) => {

  const [isAuth, setIsAuth] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const value = {
    isAuth,setIsAuth,
    email,setEmail,
    password,setPassword
  }

  return(
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;