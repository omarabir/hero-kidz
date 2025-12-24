import React from "react";
import { FaCartPlus } from "react-icons/fa";

const CartButton = () => {
  return (
    <div>
      <button className="btn btn-primary  flex gap-1">
        <FaCartPlus />
        Add to Cart
      </button>
    </div>
  );
};

export default CartButton;
