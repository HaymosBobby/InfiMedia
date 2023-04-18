import { createContext, useState } from "react";

const AuthContext = createContext({})

export const AuthContextProvider = ({children}) => {

  const [isAuth, setIsAuth] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const value = {
    isAuth,setIsAuth,
    email,setEmail,
    password,setPassword,
    confirmPassword,setConfirmPassword
  }

  return(
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;