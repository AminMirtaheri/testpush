import { Option, Select, Textarea } from "@material-tailwind/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { BASEURL } from "../../../constants";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [long, setLong] = useState("");
  const [lat, setLat] = useState("");
  const [metaDesc, setMetaDesc] = useState("");
  const [meta, setMetaTitle] = useState("");
  const [image, setImage] = useState("");
  const [pdf, setPdf] = useState("");
  const [Address, SetAddress] = useState("");
  const [catId, setCatId] = useState("");
  const [category, setCat] = useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const token = localStorage.getItem("token");
  const submitForm = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData();
    formData.append("title", title);
    formData.append("meta", meta);
    formData.append("description", description);
    formData.append("image", image);
    formData.append("pdf", pdf);
    formData.append("category", catId);
    const data = {
      title,
      meta,
      description,
      image,
      pdf,
      category: catId,
    };
    console.log(data);
    axios
      .post(`${BASEURL}/admin/product/create`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        toast("created successfully", {
          icon: "👏",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
        setIsLoading(false);
      });
  };

  useEffect(() => {
    axios
      .get(`${BASEURL}/admin/category/list`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setCat(res.data.data.categories))
      .catch((err) => console.log("err", err));
  }, []);
  return (
    <div
      style={{ height: "100vh", direction: "rtl" }}
      className="z-0 flex w-full flex-col items-center justify-center"
    >
      <Toaster position="top-center" />
      <title>افزودن محصول</title>
      <div className="w-full flex justify-start px-4 py-2">
        <Link to={'/admin/productlist'} className="bg-blue-100 text-blue-500 px-3 py-2 rounded-xl">product list</Link>
      </div>
      <p className="text-xl w-full block w-8/12 text-center font-semibold text-blue-600 my-10">
        Add Product
      </p>
      <form
        encType="multipart/form-data"
        className="my-4 grid w-8/12  gap-x-20 gap-y-4 flex flex-col "
        onSubmit={submitForm}
      >
        <div className="w-full">
          <input
            type="text"
            className="rounded-xl border-2 border-gray-500 bg-white px-3 py-2 text-gray-900 w-4/12 ml-5"
            placeholder="عنوان"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <input
            type="text"
            className="z-0 rounded-xl border-2 border-gray-500 bg-white px-3 py-2 text-gray-900 w-4/12 ml-5"
            placeholder="Author"
            onChange={(e) => {
              setMetaTitle(e.target.value);
            }}
          />
        </div>

        <div className="w-6/12 my-5">
          chose image:{" "}
          <input
            id="fileUploadImage"
            type="file"
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
          />
        </div>
        <div className="w-6/12 my-5">
          chose file :{" "}
          <input
            id="fileUploadPdf"
            type="file"
            onChange={(e) => {
              setPdf(e.target.files[0]);
            }}
          />
        </div>

        <div className="my-5">
          <Select variant="static" label="انتخاب دسته بندی">
            {category?.map((cats, ids) => {
              return (
                <Option
                  value={cats._id}
                  onClick={() => {
                    // eslint-disable-next-line no-underscore-dangle
                    setCatId(cats?._id);
                  }}
                  style={{ zIndex: "2" }}
                  key={ids}
                >
                  {cats?.title}
                </Option>
              );
            })}
          </Select>
        </div>

        <Textarea
          label="توضیحات"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        {isLoading === true ? (
          <button
            type="submit"
            className={
              "my-4 w-full rounded-lg bg-gray-600 px-3 py-2 text-white"
            }
            disabled
          >
            ثبت محصول
          </button>
        ) : (
          <button
            type="submit"
            className={
              "my-4 w-full rounded-lg bg-blue-600 px-3 py-2 text-white"
            }
          >
            ثبت محصول
          </button>
        )}
      </form>
    </div>
  );
};

export default AddProduct;
