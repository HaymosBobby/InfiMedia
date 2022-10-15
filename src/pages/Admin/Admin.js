import React, { useContext, useState } from "react";
import {
  addDoc,
  collection,
  orderBy,
  query,
  Timestamp,
} from "firebase/firestore";
import { db, auth, storage } from "../../components/firebase_config";
import { signOut } from "firebase/auth";
import {ref, uploadBytes} from "firebase/storage";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { v4} from "uuid"

const Admin = () => {
  const { setIsAuth } = useContext(AuthContext);

  let navigate = useNavigate();

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/login");
    });
  };

  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [col1, setCol1] = useState("");
  const [col2, setCol2] = useState("");
  const [col3, setCol3] = useState("");
  const [pic1, setPic1] = useState(null);
  const [pic2, setPic2] = useState(null);

  const blogsCollectionRef = collection(db, "blogs");

  const q = query(blogsCollectionRef, orderBy("createdAt", "desc"));

  const createPost = async () => {
    await addDoc(blogsCollectionRef, q, {
      title,
      excerpt,
      col1,
      col2,
      col3,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
      createdAt: Timestamp.now(),
    });
  };

  const uploadImages= async () => {
    if(pic1 === "null") return;
    const imageRef = ref(storage, `images/${pic1.name + v4()}`)
    try {
      await uploadBytes(imageRef, pic1)
    (alert("image uploaded"))
    }
    catch(err) {
      console.log(err.message)
    }
  }
  
  const uploadPictures= async () => {
    if(pic2 === "null") return;
    const imageRef = ref(storage, `images/${pic2.name + v4()}`)
    try {
      await uploadBytes(imageRef, pic2)
    (alert("image uploaded"))
    }
    catch(err) {
      console.log(err.message)
    }
  }

  return (
    <div className="admin">
      <div>
        <input type="file" onChange={(e) => setPic1(e.target.files[0])} />
        <button onClick={uploadImages}>Upload</button>
        <input type="file" onChange={(e) => setPic2(e.target.files[0])} />
        <button onClick={uploadPictures}>Upload</button>
      </div>
      <div>
        <input
          type="text"
          placeholder="title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="excerpt"
          onChange={(e) => {
            setExcerpt(e.target.value);
          }}
        />
      </div>
      <div>
        <textarea
          type="text"
          cols="30"
          rows="10"
          onChange={(e) => {
            setCol1(e.target.value);
          }}
        ></textarea>
        <textarea
          type="text"
          cols="30"
          rows="10"
          onChange={(e) => {
            setCol2(e.target.value);
          }}
        ></textarea>
        <textarea
          type="text"
          cols="30"
          rows="10"
          onChange={(e) => {
            setCol3(e.target.value);
          }}
        ></textarea>
        <button onClick={createPost}>Create Post </button>
      </div>

      <button onClick={signUserOut}>Log Out</button>
    </div>
  );
};

export default Admin;
