import React from "react";
import { Route, Routes } from "react-router-dom";
import Blogs from "./pages/Blogs";
import Home from "./pages/Home";
import PodcastPage from "./pages/PodcastPage";
import SingleBlog from "./pages/SingleBlog";
import Admin from "./pages/Admin/Admin";
import WithoutNav from "./WithoutNav";
import WithNav from "./WithNav";

import "./styles/app.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<WithoutNav />}>
          <Route exact path="/admin" element={<Admin />} />
        </Route>
        <Route element={<WithNav />}>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/blogs" element={<Blogs />} />
          <Route exact path="/podcast" element={<PodcastPage />} />
          <Route exact path="/blog-article" element={<SingleBlog />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
