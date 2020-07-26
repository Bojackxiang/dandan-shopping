import "./homepage.style.scss";
import Directory from "../../components/Directory/Directory";
import React from "react";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="directory-menu">
        <Directory />
      </div>
    </div>
  );
};

export default Homepage;
