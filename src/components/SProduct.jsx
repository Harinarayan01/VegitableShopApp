import React from "react";

const SProduct = ({Image,Text}) => {
  return (
    <div className="card shadow-sm">
      <img src={Image} alt=""  style={{height:"200px"}} />

      <div className="card-body  ">
        <p>
          <p>{Text}</p>
        </p>
      </div>
    </div>
  );
};

export default SProduct;
