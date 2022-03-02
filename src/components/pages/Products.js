// import React from "react";

// import "../../App.css";

// export default function Products() {
//   return <h1 className="products">PRODUCTS</h1>;
// }

import React from "react";
import "../Products.css";
import imageOne from "../Images/img-home.jpeg";
import imageTwo from "../Images/img-9.jpeg";
import imageThree from "../Images/img-2.jpeg";

const Products = () => {
  return (
    <>
      <div className="container">
        <h1 className="brazil">Enjoy wonderful experiences in Brazil</h1>
        <div className="grids">
          <div className="grid">
            <img src={imageOne} alt="imageOne" />
            <h2 className="rio">
              Rio de janeiro
              <br />
              Beaches
            </h2>
            <p className="brazil-text">
              Nothing is more Brazilian than the beaches of Rio.Urbanized and
              preserved to the right extent,They represent perfectly the
              cariocas and their joy.And i said Nothing is more Brazilian than
              the beaches of Rio.Urbanized and preserved to the right
              extent,They represent perfectly the cariocas and their joy.
            </p>
            <hr />
            <p>Durat</p>
          </div>
          <div className="grid">
            <img src={imageTwo} alt="imageOne" />
          </div>
          <div className="grid">
            <img src={imageThree} alt="imageOne" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
