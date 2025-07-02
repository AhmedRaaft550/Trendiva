import styles from "./footer.module.css";

const FooterSchema = ({
  socialLinks,
  email,
  setEmail,
  submitted,
  handleSubmit,
}) => {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.container}>
        <div className={styles.column}>
          <h2 className={styles.logo}>Velvet Touch</h2>
          <p className={styles.description}>
            Premium cosmetics delivered to your door with care and class.
            Experience the beauty of effortless glow.
          </p>
          <div className={styles.socialIcons} aria-label="Social media links">
            {socialLinks.map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={styles.socialIconLink}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <nav className={styles.column} aria-label="Quick links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/" tabIndex={0}>
                Home
              </a>
            </li>
            <li>
              <a href="/shop" tabIndex={0}>
                Shop
              </a>
            </li>
            <li>
              <a href="/about" tabIndex={0}>
                About
              </a>
            </li>
            <li>
              <a href="/contact" tabIndex={0}>
                Contact
              </a>
            </li>
            <li>
              <a href="/faqs" tabIndex={0}>
                FAQs
              </a>
            </li>
          </ul>
        </nav>

        <nav className={styles.column} aria-label="Customer care">
          <h3>Customer Care</h3>
          <ul>
            <li>
              <a href="/shipping-returns" tabIndex={0}>
                Shipping & Returns
              </a>
            </li>
            <li>
              <a href="/privacy-policy" tabIndex={0}>
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms" tabIndex={0}>
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="/track-order" tabIndex={0}>
                Track Order
              </a>
            </li>
          </ul>
        </nav>

        <section className={styles.column} aria-label="Newsletter subscription">
          <h3>Newsletter</h3>
          <p>Get exclusive offers and updates.</p>
          <form className={styles.newsletterForm} onSubmit={handleSubmit}>
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-required="true"
            />
            <button type="submit" disabled={submitted}>
              {submitted ? "Subscribed" : "Subscribe"}
            </button>
          </form>
        </section>
      </div>

      <div className={styles.bottomBar}>
        <p>&copy; {new Date().getFullYear()} Trendiva. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default FooterSchema;
