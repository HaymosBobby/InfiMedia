import { createUserWithEmailAndPassword } from "firebase/auth";
import React, {useContext} from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../components/firebase_config";
import AuthContext from "../../context/AuthContext";

const SignUp = () => {

  const { email, password, setEmail, setPassword } = useContext(AuthContext);

  let navigate = useNavigate();
  console.log(email,password)
  const createUser = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/login");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="sign_up">
      <form>
        <input onChange={(e) => setEmail(e.target.value)} type="email" />
        <input onChange={(e) => setPassword(e.target.value)} type="password" />
        <button type="button" onClick={createUser}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
