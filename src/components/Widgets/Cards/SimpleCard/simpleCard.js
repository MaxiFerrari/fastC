import React from "react";
import "./simpleCard.scss";

const simpleCard = (props) => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="row">
          <div className="col-6 col">
            <div className="avatar-lg bg-soft-primary border border-primary rounded-circle">
              {props.icon}
            </div>
          </div>
          <div className="col-6 col">
            <div className="text-end">
              <h3 className="text-dark mt-1">
                <span>
                  <span>{props.numbers}</span>
                </span>
              </h3>
              <p className="text-muted mb-1 text-truncate">{props.text}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default simpleCard;
