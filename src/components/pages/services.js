// import React from "react";

// import "../../App.css";

// export default function services() {
//   return <h1 className="services">Services</h1>;
// }

import React from "react";

import "../../App.css";
import "../service.css";

const Services = () => {
  return (
    <>
      <div className="services-container">
        <h1 className="welcome">WELCOME TO ETU</h1>
        <p>
          Get started on your vacation planning by exploring Australia via our
          360° videos
        </p>
        <button className="degree">watch 360° videos</button>
      </div>
    </>
  );
};

export default Services;
