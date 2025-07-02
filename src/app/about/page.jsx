import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <h1 className={styles.title}>About Trendiva</h1>
        <p className={styles.intro}>
          Welcome to <strong>Trendiva</strong> – your all-in-one destination for
          quality, style, and convenience in online shopping.
        </p>

        <div className={styles.contentGrid}>
          <div className={styles.card}>
            <h2>What We Offer</h2>
            <p>
              Trendiva brings you a curated selection of{" "}
              <strong>fresh meat</strong>, <strong>farm eggs</strong>, stylish{" "}
              <strong>clothing</strong>, and a wide range of{" "}
              <strong>everyday essentials</strong>—all under one roof.
            </p>
          </div>

          <div className={styles.card}>
            <h2>Our Mission</h2>
            <p>
              We aim to simplify your life by combining quality products with
              fast delivery and an enjoyable shopping experience—tailored to
              your everyday needs.
            </p>
          </div>

          <div className={styles.card}>
            <h2>Why Trendiva?</h2>
            <ul>
              <li>Reliable delivery across all categories</li>
              <li>Great deals on everyday and premium items</li>
              <li>Modern and easy-to-use shopping interface</li>
              <li>Carefully selected, high-quality products</li>
            </ul>
          </div>
        </div>

        <p className={styles.footerNote}>
          Whether you’re cooking dinner or picking an outfit, Trendiva is here
          to make it easier, smarter, and more stylish.
        </p>
      </div>
    </section>
  );
};

export default About;
