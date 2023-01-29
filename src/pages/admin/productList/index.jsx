import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";
import { BASEURL } from "../../../constants";
import { Link, useNavigate } from "react-router-dom";

const ProductList = () => {
  const token = localStorage.getItem("token");
  const [list, setList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://panel.loueiacademy.com/product/list")
      .then((res) => {
        setList(res.data.data.products);
      })
      .catch((err) => console.log("err", err));
  }, []);

  const DeleteProduct = (id) => {
    axios
      .delete(`${BASEURL}/admin/product/remove/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => console.log("err", err));
  };

  return (
    <div className="flex flex-col justify-center items-center">
        <div className="w-full flex justify-start my-4 px-4">
            <Link to={'/admin/addproduct'} className="px-3 py-2 bg-blue-100 text-blue-500 rounded-xl">
                Add Product
            </Link>
        </div>
      <div className="content">
        {list.map((i) => {
          return (
            <div className="item">
              <img src={i.imageUrl} />
              <div>
                <span>title:</span> {i?.title}
              </div>
              <div>
                <span>description:</span> {i.description}
              </div>
              <button
                onClick={() => {
                  DeleteProduct(i._id);
                }}
                className="px-3 py-2 bg-red-50 text-red-600 rounded-xl"
              >
                delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ProductList;
