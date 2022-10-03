import React from "react";
import { FiberManualRecord } from "@mui/icons-material";
import blogimage from "../img/blogimage.jpg";
import { Link } from "react-router-dom";

const Blog = () => {
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
            <h5>admin</h5>
            <FiberManualRecord sx={{ fontSize: 6 }} />
            <h5>July 28, 2022</h5>
          </div>
          <div className="card_title">
            <Link to="/blog-article"><h4>Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.</h4></Link>
          </div>
          <div className="card_excerpt">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            in distinctio, soluta fugiat aut incidunt tenetur tempora ullam
            inventore obcaecati?
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

/*echo "# Imedia" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/HaymosBobby/Imedia.git
git push -u origin main */