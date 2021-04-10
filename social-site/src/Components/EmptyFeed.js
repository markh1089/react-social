import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";


class EmptyFeed extends React.Component {

  render() {


    return (
      <>
      <div>
        <h2 className="text-center">
          Hello <strong>user</strong>, your feed is empty.
        </h2>
      </div>     
      </>
    );
  }
}

export default EmptyFeed;