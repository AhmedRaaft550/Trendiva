"use client";

import React, { useEffect, useState, useContext } from "react";
import { FaShoppingCart, FaHeart, FaUser, FaSignOutAlt } from "react-icons/fa";
import styles from "./header.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { showToast } from "../PopUp";
import { GlobalCartContext } from "../../../context/CartContext";
import { GlobalFavContext } from "../../../context/FavContext";
import SearchBar from "./SearchBar";

const HeaderIcons = ({ closeMenu }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();
  const { cart } = useContext(GlobalCartContext);
  const { fav } = useContext(GlobalFavContext);

  // to handle if the localStorage empty or not to set up the log in and out icon
  useEffect(() => {
    const localValue = localStorage.getItem("username");
    setIsLoggedIn(!!localValue);
  }, []);

  // handle logged out
  const handleLogout = () => {
    localStorage.removeItem("username");
    setIsLoggedIn(false);
    showToast("You have logged out", "success");
    router.push("/");
  };

  return (
    <div className={styles.searchIcon}>
      <SearchBar closeMenu={closeMenu} />

      <Link
        href="/fav"
        className={styles.cartIcon}
        style={{ position: "relative" }}
        onClick={closeMenu}
      >
        <span className={styles.favBagde}>{fav.length}</span>
        <FaHeart
          className={`${styles.icon} cursor-pointer`}
          aria-label="Go to favorites"
        />
      </Link>

      <Link
        href="/cart"
        className={styles.cartIcon}
        style={{ position: "relative" }}
        onClick={closeMenu}
      >
        <span className={styles.cartBadge}>{cart.length}</span>
        <FaShoppingCart className={styles.icon} />
      </Link>

      {isLoggedIn ? (
        <button
          onClick={() => {
            handleLogout();
            closeMenu?.();
          }}
          className={`${styles.icon} cursor-pointer bg-transparent border-none`}
          aria-label="Logout"
          title="Logout"
          style={{ fontSize: "1.5rem" }}
        >
          <FaSignOutAlt />
        </button>
      ) : (
        <Link href="/login" aria-label="Login" onClick={closeMenu}>
          <FaUser className={`${styles.icon} cursor-pointer`} />
        </Link>
      )}
    </div>
  );
};

export default HeaderIcons;
