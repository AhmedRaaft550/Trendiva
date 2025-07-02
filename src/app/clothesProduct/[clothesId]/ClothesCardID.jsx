import { memo } from "react";
import styles from "../../product/[productid]/cardDetails.module.css";
import { FaHeart } from "react-icons/fa";
import Image from "next/image";

const ClothesCardID = ({
  singleProduct,
  isFavorite,
  handleCart,
  handleFav,
}) => {
  return (
    <div className={styles.cardDetails}>
      <div className={styles.imageWrapper} style={{ position: "relative" }}>
        <Image
          src={singleProduct.image}
          alt={singleProduct.title}
          fill
          priority={true}
          sizes="(max-width: 768px) 100vw, 360px"
          className={styles.ProductImage}
        />
        <FaHeart
          className={styles.favoriteIcon}
          style={{
            color: isFavorite ? "#f59e0b" : "#cbd5e1",
            cursor: "pointer",
          }}
          onClick={handleFav}
          title="Favorite"
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        />
      </div>

      <div className={styles.myCardContainer}>
        <p>
          <strong>Price:</strong> ${singleProduct.price.toFixed(2)}
        </p>
        <p>
          <strong>{singleProduct.title}</strong>
        </p>
        <p>{singleProduct.description}</p>
        <p>
          <strong>Brand:</strong> {singleProduct.brand}
        </p>

        <button type="button" className={styles.cardBtn} onClick={handleCart}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default memo(ClothesCardID);
