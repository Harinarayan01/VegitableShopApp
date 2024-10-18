import React from "react";
import HProduct from "./HProduct";
import veg1down from "../assets/images/Heath1.jpeg";
import veg2down from "../assets/images/heath2.jpeg";
import veg3down from "../assets/images/Heath3.jpeg";
import veg1 from "../assets/images/heathy1.jpeg";
import veg2 from "../assets/images/heathy2.jpeg";
import veg3 from "../assets/images/heathy3.jpeg";

const Healthly = () => {
  return (
    <div className="container-fluid px-4 py-5 healthly">
      <h2 className="text-center display-4  mt-4 fw-bold">
        It's healthy Eating Made Easy
      </h2>
      <div className="container mt-5">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <HProduct
            image1={veg1}
            image2={veg1down}
            tittle="Delicious"
            text="Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce"
          />
          <HProduct
            image1={veg2}
            image2={veg2down}
            tittle="Delicious"
            text="Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce"
          />
          <HProduct
            image1={veg3}
            image2={veg3down} 
            tittle="Delicious"
            text="Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce"
          />
        </div>
      </div>
    </div>
  );
};

export default Healthly;
