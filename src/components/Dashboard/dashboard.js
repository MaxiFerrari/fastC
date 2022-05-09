import React from "react";
import { Link, useParams } from "react-router-dom";
import { FiHeart, FiShoppingCart, FiBarChart, FiEye } from "react-icons/fi";
import SimpleCard from "../Widgets/Cards/SimpleCard/simpleCard";

import "./dashboard.scss";
const dashboard = () => {
  return (
    <div className="content">
      <div className="container-fluid dashboard">
        <div className="row">
          <div className="col-12 mt-3">
            <h1>Dashboard</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-3 col-md-6 mt-2">
            <SimpleCard
              numbers="$58947"
              text="Total Revenue"
              icon={<FiHeart />}
            />
          </div>
          <div className="col-xl-3 col-md-6 mt-2">
            <SimpleCard
              numbers="127"
              text="Today's Sales"
              icon={<FiShoppingCart />}
            />
          </div>
          <div className="col-xl-3 col-md-6 mt-2">
            <SimpleCard
              numbers="0.58%"
              text="Conversion"
              icon={<FiBarChart />}
            />
          </div>
          <div className="col-xl-3 col-md-6 mt-2">
            <SimpleCard
              numbers="78412"
              text="Today's Visits"
              icon={<FiEye />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default dashboard;
