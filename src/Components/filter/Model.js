import React from "react";
import "../filter/styles.scss";
import { MdClose } from "react-icons/md";

function Model({ close }) {
  return (
    <div className="modelBackground">
      <div className="modelContainer">
        {/* Top section */}
        <div className="topView">
          <p className="searchfiltertext">Search filters</p>
          <button
            className="buttonView"
            onClick={() => {
              close(false);
            }}
          >
            <MdClose size={30} />
          </button>
        </div>
        {/* Filter section */}
        <div className="second-view">
          <p className="sort-text">Sort By</p>
          <div className="first-filter">
            <div className="fire">
              <img
                src="https://png.pngtree.com/png-vector/20201028/ourmid/pngtree-fire-vector-icon-in-flat-style-png-image_2382381.jpg"
                className="fire-image"
              />
            </div>
            <p className="open-text">open</p>
          </div>
        </div>
        <div className="second-view">
          <p className="text">cuisine</p>
          <div className="Cuisine-box">
            <p className="open-text">All</p>
          </div>
        </div>
        {/* apply button section */}
        <div className="last-btn">
          <button
            className="apply-btn"
            onClick={() => {
              close(false);
            }}
          >
            <p className="apply-filter">Apply Filter</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Model;