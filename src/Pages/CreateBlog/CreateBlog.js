import React from "react";
import "./CreateBlog.css";
function CreateBlog() {
  return (
    <div className="form">

      <form className="form-container">
       <div > <h2 >Add Blogs</h2></div>
        <div>
          
          <input type="text" className="inputs" placeholder="Add Title" />
        </div>
        <div>
          <input type="text" className="inputs" placeholder="Add Description" />
        </div>
        <div>
          <input type="file" className="inputs" />
        </div>
        <div>
          {" "}
          <button className="inputsubmit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default CreateBlog;
