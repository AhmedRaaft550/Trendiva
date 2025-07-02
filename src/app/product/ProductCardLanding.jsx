import Link from "next/link";
import Image from "next/image";

const ProductCardLanding = ({ data, styles }) => {
  console.log(data);
  return (
    <>
      <section
        className={`${styles.deliveryIcon} flex items-center justify-center gap-4`}
        aria-label="Delivery speed announcement"
        role="region"
      >
        <h1 className="text-center text-3xl py-5 font-bold">
          GET YOUR PRODUCT IN 30 MINS
        </h1>
      </section>

      <main
        className={styles.cardContainer}
        aria-label="Product catalog"
        role="list"
      >
        {data.map((product, i) => (
          <article
            className={styles.card}
            key={product.id}
            role="listitem"
            aria-labelledby={`product-title-${product.id}`}
          >
            <Link
              href={`/product/${product.id}`}
              className="block"
              aria-label={`View details for ${product.title}`}
              tabIndex={0}
            >
              <Image
                src={product.images[0]}
                alt={`Image of ${product.title}`}
                width={300}
                height={300}
                className={styles.PImage}
                loading={i > 0 ? "lazy" : "eager"}
                priority={i === 0}
                sizes="(max-width: 768px) 100vw, 300px"
              />
              <div className={styles.cardDes}>
                <h2
                  id={`product-title-${product.id}`}
                  className="text-xl font-semibold"
                >
                  {product.title}
                </h2>
                <p className="text-sm text-gray-600">
                  {product.description.length > 50
                    ? product.description.slice(0, 50) + "..."
                    : product.description}
                </p>
                <p className="font-medium text-black">
                  Price: ${product.price}
                </p>
              </div>
              <div className={styles.cartBtn}>
                <button
                  className={styles.btn}
                  aria-label={`Details for ${product.title}`}
                  type="button"
                  onClick={(e) => e.preventDefault()}
                >
                  Details
                </button>
              </div>
            </Link>
          </article>
        ))}
      </main>
    </>
  );
};

export default ProductCardLanding;
