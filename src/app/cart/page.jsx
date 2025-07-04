"use client";

import { useContext } from "react";
import { GlobalCartContext } from "../../../context/CartContext";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaTrash } from "react-icons/fa";
import styles from "./cart.module.css";

const Cart = () => {
  const { cart, removeFromCart } = useContext(GlobalCartContext);
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const router = useRouter();

  const handleBackToProduct = (id) => {
    router.push(`clothesProduct/${id}`);
  };

  if (cart.length === 0) {
    return (
      <div className={styles.emptyCart}>
        <h2 className={styles.emptyText}>Your cart is currently empty 🛒</h2>
        <Link href="/clothesProduct" className={styles.cartLink}>
          Add A New Product
        </Link>
      </div>
    );
  }

  return (
    <section className={styles.cartWrapper}>
      <h1 className={styles.heading}>Your Shopping Cart</h1>

      <div className={styles.cartItems}>
        {cart.map((item) => (
          <div key={item.id} className={styles.cartItem}>
            <div
              onClick={() => handleBackToProduct(item.id)}
              className={styles.imageArea}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={100}
                height={100}
                className={styles.productImage}
              />
            </div>

            <div className={styles.details}>
              <h2 className={styles.title}>{item.title}</h2>
              <p className={styles.description}>
                {item.description?.slice(0, 100)}...
              </p>
              <p className={styles.price}>${item.price}</p>
            </div>

            <button
              className={styles.removeBtn}
              onClick={() => removeFromCart(item.id)}
              title="Remove item"
            >
              <FaTrash />
            </button>
          </div>
        ))}
      </div>

      <div className={styles.cartFooter}>
        <h3 className={styles.total}>Total: ${total.toFixed(2)}</h3>

        <button className={styles.checkoutBtn}>Proceed to Checkout</button>
      </div>
    </section>
  );
};

export default Cart;
