import React from "react";
import Data from "./Property-data";
import "../Styles/Route.css";

export default function Prp1() {
  return (
    <div className="Prp1">
      <div className="Image-side">
        <img
          src="https://silverdevelopersltd.com/wp-content/uploads/2022/07/AfiyaGarden_Pview.jpg"
          alt="image"
        />
      </div>
      <div className="data-side">
        <Data />
      </div>
      <div className="Diagram">
        <h1>Floor</h1>
        <img
          src="https://silverdevelopersltd.com/wp-content/uploads/2022/07/AnowerLodge-Typical.png"
          alt="img"
        />
      </div>
      <div className="Diagram">
      <h1>Car parking</h1>
        <img
          src="https://silverdevelopersltd.com/wp-content/uploads/2022/07/AnowerLodge-Car-parking.png"
          alt="img"
        />
      </div>
    </div>
  );
}
