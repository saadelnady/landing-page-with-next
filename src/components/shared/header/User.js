import React, { useEffect, useState } from "react";
import Link from "next/link";
import { BsCart3 } from "react-icons/bs";
import UserDropDown from "./UserDropDown";

const User = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const updateCartItems = () => {
      const storedCartItems =
        JSON.parse(localStorage.getItem("cartItems")) || [];
      setCartItems(storedCartItems);
    };

    if (typeof window !== "undefined") {
      updateCartItems();
      const handleStorageChange = (event) => {
        if (event.key === "cartItems") {
          updateCartItems();
        }
      };
    }
  }, []);

  return (
    <div className="user d-flex col-8 col-lg-3 justify-content-evenly align-items-center">
      <div className="position-relative">
        <Link href="/cart">
          <BsCart3 className="fs-2 cart cursor-pointer" />
        </Link>
        <span className="position-absolute top-0 start-100 px-2 py-1 rounded-circle translate-middle text-light bg-danger">
          {cartItems.length > 0 ? cartItems.length : 0}
        </span>
      </div>
      <UserDropDown />
    </div>
  );
};

export default User;
