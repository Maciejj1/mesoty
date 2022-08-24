import React from "react";
import man from "../Assets/man.png";
import "./FirstPage.scss";
const FirstPage = () => {
  return (
    <div className="first">
      <div className="first-container">
        <div className="first-container-base">
          <div className="first-container-base-text">
            <h1 className="first-container-base-text-title">
              Idealna strona WWW Twojej firmy.
            </h1>
            <p className="first-container-base-text-text">
              <b>Wykorzystaj stronę WWW i</b> rozwiń swój biznes. Zaprojektujemy
              , zbudujemy ze standardami SEO i zapewnimy obsługę i ochronę
              internetową Twojej firmy
            </p>
          </div>
          <div className="first-container-base-image">
            <img
              src={man}
              alt="zaskoczony pan"
              className="first-container-base-image-png"
            />
          </div>
        </div>
      </div>
      <div className="first-one"></div>
      <div className="first-two"></div>
    </div>
  );
};

export default FirstPage;
