import { FiberManualRecord } from "@mui/icons-material";
import React from "react";
import Sidebar from "../components/Sidebar";
import blogimage from "../img/blogimage.jpg";
import reference from "../img/tbgd.jpg";

const SingleBlog = () => {
  return (
    <div className="single_blog_page">
      <div className="page_header_section"></div>

      <div className="container">
        <div className="single_blog">
          <div className="featured_image">
            <img src={blogimage} alt="single blog" />
          </div>
          <div className="blog_info">
            <h5>admin</h5>
            <FiberManualRecord sx={{ fontSize: 6 }} />
            <h5>July 28, 2022</h5>
            <FiberManualRecord sx={{ fontSize: 6 }} />
            <h5>Entertainment</h5>
          </div>
          <div className="title">
            <h4>Lorem ipsum dolor sit amet.</h4>
          </div>
          <div className="single_blog_content">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor,
              animi ratione voluptatem at beatae mollitia tenetur corporis
              ducimus eum dolorem, quae commodi fugit voluptatum, debitis neque
              cum porro recusandae ipsum aspernatur sapiente et nisi! Quaerat
              provident excepturi facere quasi illum exercitationem nihil iure,
              dolorem pariatur magni perferendis maxime possimus nesciunt! Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Assumenda modi
              impedit laboriosam doloremque quidem voluptas consectetur ea vitae
              fugit fuga nostrum, laborum obcaecati blanditiis rerum vel illum
              laudantium soluta eaque. Cumque tenetur laboriosam aperiam quia
              rerum atque voluptas, cum eveniet asperiores earum dicta minima ex
              autem harum ipsum veritatis animi.
            </p>
            <p className="imaged_paragraph">
              <img src={reference} alt="reference" />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              dolores placeat magnam quis explicabo modi itaque excepturi nemo
              rerum magni dolorem qui eius libero alias, odio odit non
              perferendis hic atque praesentium quos laudantium exercitationem
              quaerat accusantium! Debitis voluptatem, veniam illum
              reprehenderit officia sed officiis, deleniti iure aperiam sequi
              nobis reiciendis accusantium? Eveniet voluptate, libero distinctio
              cupiditate ullam error ipsam esse magnam, repellat modi quo aut,
              tenetur enim ipsum culpa a quod! Exercitationem, veniam eos? Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Veritatis nisi
              fuga, ab ex incidunt rem vero ratione accusantium voluptatibus,
              tenetur ea. Facere modi enim placeat, ipsam perferendis distinctio
              fugit quia eos eligendi tenetur, quidem omnis non velit incidunt
              vitae. Assumenda rem animi optio cupiditate expedita ipsam
              voluptate praesentium unde nulla sit. Pariatur, ad numquam
              inventore earum unde aspernatur voluptate nobis, rem deserunt
              exercitationem aliquam soluta alias consectetur ipsum adipisci
              iusto dolor itaque ipsam? Fugit magni provident neque voluptates
              placeat doloribus suscipit a recusandae voluptatum veritatis
              possimus delectus, officiis hic quod ullam porro deleniti ipsum
              est. Molestias reprehenderit exercitationem nemo. Quisquam.
            </p>

            <div>
              <h2>Subtitle</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
                accusantium inventore repellat officia non, vel autem ipsam quas
                reiciendis voluptatum quia sapiente similique! Quia, nemo
                reiciendis. Reiciendis eligendi voluptatibus tenetur ipsam
                doloribus autem enim fugiat, sint nostrum officia magnam
                consequatur totam sapiente culpa veritatis delectus, cum vel
                laudantium? Quam harum in illum quod, deserunt animi tempora
                neque natus aliquam nemo officia ipsum ducimus. Repellat maxime,
                saepe, maiores accusantium quos repudiandae vero, cum quae id
                autem nihil sunt molestiae necessitatibus sint?
              </p>
            </div>
          </div>
        </div>
        <Sidebar />
      </div>
    </div>
  );
};

export default SingleBlog;
