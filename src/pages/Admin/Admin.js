import React from "react";

const Admin = () => {
  return (
    <div className="admin">
      <div>
        <input type="file" />
        <button>upload</button>
      </div>
      <div>
        <input type="text" placeholder="admin" />
        <input type="text" placeholder="date" />
        <input type="text" placeholder="category" />
        <button>upload</button>
      </div>
      <div>
        <input type="text" placeholder="title" />
        <input type="text" placeholder="excerpt" />
        <button>upload</button>
      </div>
      <div>
        <input type="file" />
        <textarea type="text" cols="30" rows="10"></textarea>
        <textarea type="text" cols="30" rows="10"></textarea>
        <textarea type="text" cols="30" rows="10"></textarea>
        <button>upload</button>
      </div>
    </div>
  );
};

export default Admin;
