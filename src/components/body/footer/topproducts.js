import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import ProductBody from "./productsbody";

function Prodcuts() {
  return (
    <div className="products">
      <div className="header">
        <p>Top Product</p>
        <p>Monthly</p>
        <p>
          <IoIosArrowDown />
        </p>
      </div>
      <div className="products-body">
        <ProductBody rank='#1' title='Polo blue T-shirt' price='25.4' ratings='3.82k' />
        <ProductBody rank='#2' title='Hoodie for men' price='24.5' ratings='3.14k' />
        <ProductBody rank='#3' title='Red color Cap' price='22.5' ratings='2.84k' />
        <ProductBody rank='#4' title='Pocket T-shirt' price='23.7' ratings='3.05k' />
       
      </div>
    </div>
  );
}

export default Prodcuts;
