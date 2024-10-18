import React from "react";
import DownSide from "./DownSide";
import product1 from '../assets/images/product1.jpeg'
import product2 from '../assets/images/product2.jpeg'
import product3 from '../assets/images/product3.jpeg'
import product4 from '../assets/images/product4.jpeg'
import product5 from '../assets/images/product5.jpeg'
import product6 from '../assets/images/product6.jpeg'
import product7 from '../assets/images/product7.jpeg'
import product8 from '../assets/images/product8.jpeg'
import product9 from '../assets/images/product9.jpeg'

const Product = () => {
  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between">
        <h3 className="text-success">Customer Favorites </h3>
        <button className="btn btn-transparent  fw-bold px-3 rounded-0 border-success">All  Products</button>

      </div>
      <div className="row mt-4">
        <DownSide
        Image={product1}
        Name="Eggplant"
        price="$0.5/kg"
        color="p1color"
        
        />
        <DownSide
        Image={product2}
        Name="cauliflower"
        price="$0.55/kg"
        color="p2color"
        
        />
        <DownSide
        Image={product3}
        Name="carrot"
        price="$0.35/kg"
        color="p3color"

        />
        <DownSide
        Image={product4}
        Name="green leafy"
        price="$0.45/kg"
        color="p3color"

        />
        <DownSide
        Image={product5}
        Name="Tamato"
        price="$0.85/kg"
        color="p3color"

        />
        <DownSide
        Image={product6}
        Name="Patato"
        price="$0.45/kg"
        color="p3color"

        />
        <DownSide
        Image={product7}
        Name="Capsicum"
        price="$0.35/kg"
        color="p3color"

        />
        <DownSide
        Image={product8}
        Name="Bitter Gourd"
        price="$0.25/kg"
        color="p3color"

        />
        <DownSide
        Image={product9}
        Name="garlic"
        price="$0.15/kg"
        color="p3color"

        />

      </div>
    </div>
  );
};

export default Product;
