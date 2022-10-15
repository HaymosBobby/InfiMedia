import React from "react";
import { FiberManualRecord } from "@mui/icons-material";
import blogimage from "../img/blogimage.jpg";
import { Link } from "react-router-dom";

const Blog = ({title, excerpt,name,createdAt}) => {

  const date = createdAt && createdAt.toDate().toDateString();

  return (
    <div className="card">
      <div className="card_content">
        <img
          className="card_image"
          src={blogimage}
          alt="Blog"
        />
        <div className="card_info">
          <div className="blog_info">
            <h5>{name}</h5>
            <FiberManualRecord sx={{ fontSize: 6 }} />
            <h5>{date}</h5>
          </div>
          <div className="card_title">
            <Link to="/blog-article"><h4>{title}</h4></Link>
          </div>
          <div className="card_excerpt">
            {excerpt}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

