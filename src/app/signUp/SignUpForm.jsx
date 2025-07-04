import Link from "next/link";

const SignForm = ({ data }) => {
  const { styles, register, handleSubmit, errors, onSubmit } = data;
  styles;

  const countries = [
    { code: "", name: "Select Country" },
    { code: "US", name: "United States" },
    { code: "GB", name: "United Kingdom" },
    { code: "CA", name: "Canada" },
    { code: "AE", name: "United Arab Emirates" },
    { code: "IN", name: "India" },
  ];

  return (
    <section className={styles.loginPage}>
      <form
        className={styles.form}
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <h1 className={styles.heading}>Create Account</h1>

        <input
          type="text"
          placeholder="Full Name"
          className={styles.input}
          {...register("name")}
          autoComplete="name"
        />
        {errors.name && (
          <p className={styles.errorMsg}>{errors.name.message}</p>
        )}

        <input
          type="email"
          placeholder="Email"
          className={styles.input}
          {...register("email")}
          autoComplete="email"
        />
        {errors.email && (
          <p className={styles.errorMsg}>{errors.email.message}</p>
        )}

        <input
          type="tel"
          placeholder="Mobile Number"
          className={styles.input}
          {...register("mobile")}
          autoComplete="tel"
        />
        {errors.mobile && (
          <p className={styles.errorMsg}>{errors.mobile.message}</p>
        )}

        <input
          type="password"
          placeholder="Password"
          className={styles.input}
          {...register("password")}
          autoComplete="tel"
        />
        {errors.password && (
          <p className={styles.errorMsg}>{errors.password.message}</p>
        )}

        <select
          className={styles.input}
          {...register("country")}
          defaultValue=""
          aria-label="Select Country"
        >
          {countries.map(({ code, name }) => (
            <option key={code} value={code}>
              {name}
            </option>
          ))}
        </select>
        {errors.country && (
          <p className={styles.errorMsg}>{errors.country.message}</p>
        )}

        <div className={styles.signUp}>
          <button type="submit" className={styles.button}>
            Sign Up
          </button>
          <p className={styles.text}>
            Already have an account?{" "}
            <Link style={{ textDecoration: "underline" }} href="/login">
              Log in
            </Link>
          </p>
        </div>
      </form>
    </section>
  );
};

export default SignForm;
