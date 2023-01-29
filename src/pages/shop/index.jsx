import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASEURL } from "../../constants";
import cover from "../../image/sample.jpg";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASEURL}/product/list`)
      .then((res) => setProducts(res.data.data.products))
      .catch((err) => console.log("err", err));
  }, []);

  return (
    <div className="flex items-center px-4 w-full">
      <div className="w-4/4 grid grid-cols-5 gap-x-10 py-5 px-12">
        {products.map((items, ids) => {
          return (
            <div className="flex flex-col w-full">
              <img src={items.imageUrl} className="w-full rounded-sm" alt="" />
              <div className="flex flex-col py-2 px-1 text-left rounded-b-md">
                <h1 className="font-semibold text-lg">{items.title}</h1>
                <p className="text-xs mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Libero, ex?
                </p>
                <p style={{ color: "#4fd6f7" }} className="text-sm mt-3">
                  #Drama #Psychology
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-1/4"></div>
    </div>
  );
};

export default Shop;
