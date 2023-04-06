import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import Blog from "../components/Blog";
import Sidebar from "../components/Sidebar";
import { db } from "../components/firebase_config";

const Blogs = () => {
  const [postList, setPostList] = useState([]);
  const blogsCollectionRef = collection(db, "blogs");

  useEffect(() => {
    const getData = async () => {
      const data = await getDocs(blogsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getData();
  }, [blogsCollectionRef, postList]);

  // blogsCollectionRef, postList

  return (
    <div className="blogs_page">
      <div className="page_header_section"></div>

      <div className="container">
        <div className="blogs">
          {/* <Blog />
          <Blog />
          <Blog />
          <Blog />
          <Blog />
          <Blog />
          <Blog />
          <Blog />
          <Blog />
          <Blog />
          <Blog />
          <Blog />
          <Blog />
          <Blog /> */}
          {(postList.length === 0) ? "loading..." :
            postList.map(
              ({ title, excerpt, id, createdAt, col1, col2, col3, author }) => {
                return (
                  <Blog
                    title={title}
                    excerpt={excerpt}
                    key={id}
                    createdAt={createdAt}
                    col1={col1}
                    col2={col2}
                    col3={col3}
                    name={author.name}
                  />
                );
              }
            )}
        </div>
        <Sidebar />
      </div>
    </div>
  );
};

export default Blogs;
