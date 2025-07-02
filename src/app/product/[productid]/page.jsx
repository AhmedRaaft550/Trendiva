"use client";

import { useContext, useState } from "react";
import { GlobalContext } from "../../../../context/ProductContext";
import { useParams } from "next/navigation";
import Image from "next/image";
import styles from "./cardDetails.module.css";
import { FaHeart } from "react-icons/fa";

const ProductDetailsPage = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const mydata = useContext(GlobalContext);
  const product = useParams();
  const myId = Number(product.productid);

  if (!mydata) return <h1>Loading...</h1>;

  const productData = mydata.find((item) => item.id === myId);

  if (!productData) return <h1>No DATA FOUND ...</h1>;

  return (
    <div>
      <div className={styles.cardDetails}>
        <div className={styles.imageWrapper}>
          <Image
            fill
            sizes="(max-width: 768px) 100vw, 360px"
            priority
            src={productData.images[0]}
            alt={productData.title}
            className={styles.ProductImage}
          />
          <FaHeart
            className={styles.favoriteIcon}
            style={{ color: isFavorite ? "#f59e0b" : "#cbd5e1" }}
            onClick={() => setIsFavorite((prev) => !prev)}
            title={isFavorite ? "Remove From Favorite" : "Add to fav"}
          />
        </div>

        <div className={styles.myCardContainer}>
          <p>
            <strong>Price:</strong> ${productData.price}
          </p>
          <p>
            <strong>{productData.title}</strong>
          </p>
          <p>{productData.description}</p>
          <p>
            <strong>Brand:</strong> {productData.brand}
          </p>

          <button type="button" className={styles.cardBtn}>
            Add to cart
          </button>

          <div>
            <h4>Tags:</h4>
            {productData.tags.map((x, i) => (
              <span key={i} className={styles.tag}>
                #{x}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.reviewSection}>
        <h4>Reviews:</h4>
        {productData.reviews.map((x, i) => (
          <div key={i} className={styles.reviewBox}>
            <p>
              <strong>Comment:</strong> {x.comment}
            </p>
            <p>
              <strong>Date:</strong> {x.date}
            </p>
            <p>
              <strong>Name:</strong> {x.reviewerName}
            </p>
            <p>
              <strong>Email:</strong> {x.reviewerEmail}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetailsPage;
