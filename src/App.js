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
import LogIn from "./pages/Admin/LogIn";
import SignUp from "./pages/Admin/SignUp";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoutes from "./components/ProtectedRoutes";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Routes>
          <Route element={<WithoutNav />}>
            <Route
              path="/admin"
              element={
                <ProtectedRoutes>
                  <Admin />
                </ProtectedRoutes>
              }
            />
            <Route exact path="/login" element={<LogIn />} />
            <Route exact path="/signup" element={<SignUp />} />
          </Route>
          <Route element={<WithNav />}>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/blogs" element={<Blogs />} />
            <Route exact path="/podcast" element={<PodcastPage />} />
            <Route exact path="/blog-article" element={<SingleBlog />} />
            <Route exact path="/about" element={<About />} />
          </Route>
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
