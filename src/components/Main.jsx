import React from "react";
import Number from "./Number";
import "../scss/main.scss";

export default function Main() {
  return (
    <div className="main-container">
      <div className="description">
        <h1>
          Get <span className="purple">insights</span> that help your business grow.
        </h1>
        <p className="description-text">
          Discover the benefits of data analytics and make better decisions
          regarding revenue, customer experience, and overall efficiency.
        </p>

        <div className="number">
          <Number title="10k+" subtitle="COMPANIES" />
          <Number title="314" subtitle="TEMPLATES" />
          <Number title="12m+" subtitle="QUERIES " />
        </div>
      </div>

      <div className="image">
      </div>


      
    </div>
  );
}
