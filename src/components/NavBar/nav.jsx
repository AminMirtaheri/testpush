import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../image/Logo.png";
import axios from "axios";
import { BASEURL } from "../../constants/index.js";
import { useEffect } from "react";

const Nav = () => {
  const [menu, setMenu] = useState([]);
  const [menuIsOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const isValid = localStorage.getItem("token");

  const handleClick = () => {
    if (!isValid) {
      navigate("/login");
    } else {
      navigate("profile");
    }
  };
  useEffect(() => {
    axios
      .get(`${BASEURL}/category/list`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => setMenu(res.data.data.categories))
      .catch((err) => console.log("err", err));
  }, []);

  return (
    <div className="w-full fixed bg-white top-0 py-4 border-b-2 hidden lg:flex justify-around items-center z-10">
      <div className="flex justify-center items-center">
        <img src={Logo} alt="logo" className="w-40" />
      </div>
      <div className="flex justify-around items-center w-5/12">
        <Link to={"/"} className="coloractive">
          Home
        </Link>
        <Menu open={menuIsOpen}>
          <MenuHandler>
            <Button
              onMouseEnter={() => {
                setMenuOpen(true);
              }}
              onMouseLeave={() => {
                setMenuOpen(false);
              }}
              variant="text"
              className="text-black coloractive"
            >
              Products
            </Button>
          </MenuHandler>
          <MenuList
            onMouseEnter={() => {
              setMenuOpen(true);
            }}
            onMouseLeave={() => {
              setMenuOpen(false);
            }}
          >
            {menu.map((items, ids) => {
              return (
                <MenuItem>
                  <Link to={`/shop/${items._id}`}>{items.title}</Link>
                </MenuItem>
              );
            })}
          </MenuList>
        </Menu>
        <button onClick={handleClick} className="coloractive">
          Profile
        </button>
        <p className="coloractive">Contact us</p>
      </div>
      <div className="flex justify-between items-center w-2/12">
        {!isValid ? (
          <Link
          to={"/login"}
          style={{ backgroundColor: "#4fd6f7" }}
          className="text-white px-4 py-2 rounded-lg flex justify-between items-center w-max"
        >
          <svg
            className="mr-2"
            width="12"
            height="15"
            viewBox="0 0 12 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.68 11.9406C11.68 14.371 8.34707 14.6519 5.84074 14.6519L5.66138 14.6518C4.06456 14.6479 0 14.5471 0 11.9258C0 9.54506 3.19899 9.22688 5.68625 9.21488L6.02009 9.21467C7.61681 9.21855 11.68 9.31937 11.68 11.9406ZM5.84074 10.3206C2.69879 10.3206 1.10606 10.8603 1.10606 11.9258C1.10606 13.0009 2.69879 13.5459 5.84074 13.5459C8.98195 13.5459 10.5739 13.0061 10.5739 11.9406C10.5739 10.8655 8.98195 10.3206 5.84074 10.3206ZM5.84074 0C7.99977 0 9.75546 1.75642 9.75546 3.91545C9.75546 6.07448 7.99977 7.83017 5.84074 7.83017H5.81714C3.66254 7.82354 1.91717 6.06637 1.92452 3.91324C1.92452 1.75642 3.68097 0 5.84074 0ZM5.84074 1.05297C4.26202 1.05297 2.9775 2.33674 2.9775 3.91545C2.97235 5.48901 4.24727 6.77204 5.81935 6.77794L5.84074 7.30442V6.77794C7.41872 6.77794 8.70249 5.49343 8.70249 3.91545C8.70249 2.33674 7.41872 1.05297 5.84074 1.05297Z"
              fill="white"
            />
          </svg>
          Sign Up / Sign in
        </Link>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default Nav;
