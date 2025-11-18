import React from "react";
import Post from "../components/Post";

function Dashboard() {
  return (
    <>
      <div className="container">

        <div className="row">
          <div className="col-8">
            <Post />;
          </div>
          <div className="col-4">
          </div>
        </div>

      </div>

    </>
  )

}

export default Dashboard;
