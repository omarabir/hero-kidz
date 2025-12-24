import React from "react";
import ProductCard from "../cards/ProductCard";
// import products from "@/data/toys.json";
import { getProducts } from "@/actions/server/product";
const Products = async () => {
  const products = (await getProducts()) || [];
  return (
    <div className="my-10">
      <h2 className="text-center text-4xl font-bold mb-5">Our Products</h2>

      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5">
        {products.map((product) => (
          <ProductCard key={product.title} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
