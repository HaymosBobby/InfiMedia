import React from "react";
import Blog from "../components/Blog";
import Sidebar from "../components/Sidebar";

const Blogs = () => {
  return (
    <div className="blogs_page">
      <div className="page_header_section"></div>

      <div className="container">
        <div className="blogs">
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
          <Blog />
          <Blog />
        </div>
        <Sidebar />
      </div>
    </div>
  );
};

export default Blogs;
