import React, { useContext } from "react";
import { auth, provider } from "../../components/firebase_config";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

const LogIn = () => {
  const { setIsAuth, email, password, setEmail, setPassword } =
    useContext(AuthContext);

  let navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((res) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/admin", { replace: true });
    });
  };

  // const signInWithEAP = async () => {
  //   try {
  //     await signInWithEmailAndPassword(auth, email, password);
  //     setIsAuth(true);
  //     navigate("/admin", { replace: true });
  //   } catch (err) {
  //     console.log(err.message);
  //   }
  // };

  const signInWithEAP = () => {
    signInWithEmailAndPassword(auth, email, password);
      setIsAuth(true);
      navigate("/admin", { replace: true });
  }

  return (
    <div>
      <div>
        <form>
          <input
            type="text"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            // name="password"
            autoComplete="on"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button onClick={signInWithEAP}>Sign In</button>
        </form>
      </div>
      <h1>Or</h1>
      <div>
        <p>Sign in with google to continue</p>
        <button onClick={signInWithGoogle}>Sign in with google</button>
      </div>
    </div>
  );
};

export default LogIn;
