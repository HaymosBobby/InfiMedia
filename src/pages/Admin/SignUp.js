import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../components/firebase_config";
import AuthContext from "../../context/AuthContext";
import Joi from "joi";

const SignUp = () => {
  let {
    email,
    password,
    confirmPassword,
    setEmail,
    setPassword,
    setConfirmPassword,
  } = useContext(AuthContext);

  
  // console.log(value);
    



  let navigate = useNavigate();
  // console.log(email, password, confirmPassword);
  const createUser = async (e) => {
    e.preventDefault();

    console.log(email, password);

    if (password !== confirmPassword) return console.log("passwords must match");
  
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/admin/login");
      console.log("user successfully created ")
    } catch (err) {
      console.log(err.message, "User already existing");
    }
  };

  return (
    <div className="sign_up">
      <form>
        <input onChange={(e) => setEmail(e.target.value)} type="email" />
        <input onChange={(e) => setPassword(e.target.value)} type="password" />
        <input
          onChange={(e) => setConfirmPassword(e.target.value)}
          type="password"
        />
        <button type="button" onClick={createUser}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
