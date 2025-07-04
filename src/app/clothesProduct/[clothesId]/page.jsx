"use client";
import React, { useContext, useState, useEffect, useCallback } from "react";
import { useParams } from "next/navigation";
import { MyClothesGlobal } from "../../../../context/ClothesContext";
import { GlobalCartContext } from "../../../../context/CartContext";
import { GlobalFavContext } from "../../../../context/FavContext";
import { showToast } from "@/Components/PopUp";
import ClothesCardID from "./ClothesCardID";

const ClothesId = () => {
  const { addToCart } = useContext(GlobalCartContext);
  const { addToFav } = useContext(GlobalFavContext);
  const { clothesData, error } = useContext(MyClothesGlobal);
  const { clothesId } = useParams();
  const productId = Number(clothesId);

  const [isFavorite, setIsFavorite] = useState(false);
  const [singleProduct, setSingleProduct] = useState(null);

  console.log(singleProduct);

  const isItemInStorage = useCallback((key, id) => {
    try {
      const data = JSON.parse(localStorage.getItem(key) || "[]");
      return data.some((item) => item.id === id);
    } catch {
      return false;
    }
  }, []);

  useEffect(() => {
    if (!clothesData || clothesData.length === 0) return;

    const foundProduct = clothesData.find((item) => item.id === productId);
    setSingleProduct(foundProduct || null);

    if (foundProduct) {
      setIsFavorite(isItemInStorage("fav", productId));
    }
  }, [clothesData, productId, isItemInStorage]);

  const handleCart = useCallback(() => {
    if (!singleProduct) return;

    const alreadyInCart = isItemInStorage("cart", singleProduct.id);
    if (alreadyInCart) {
      showToast("Product is already in cart", "error");
    } else {
      addToCart(singleProduct);
      showToast("Product added to cart", "success");
    }
  }, [singleProduct, isItemInStorage, addToCart]);

  const handleFav = useCallback(() => {
    if (!singleProduct) return;

    const alreadyInFav = isItemInStorage("fav", singleProduct.id);
    if (alreadyInFav) {
      showToast("Product is already in favorites", "error");
    } else {
      addToFav(singleProduct);
      showToast("Product added to favorites", "success");
      setIsFavorite(true);
    }
  }, [singleProduct, isItemInStorage, addToFav]);

  if (error) return <h1>Failed to load the data (404)</h1>;
  if (!clothesData || !singleProduct) return <h1>Loading product...</h1>;

  return (
    <ClothesCardID
      singleProduct={singleProduct}
      isFavorite={isFavorite}
      handleCart={handleCart}
      handleFav={handleFav}
    />
  );
};

export default React.memo(ClothesId);
