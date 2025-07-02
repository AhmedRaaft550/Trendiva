import styles from "./login.module.css";
import Link from "next/link";

const LoginForm = ({ formProps }) => {
  const { isLoggedIn, username, register, handleSubmit, handleForm, errors } =
    formProps;

  return (
    <section className={styles.loginPage}>
      {!isLoggedIn ? (
        <form
          className={styles.form}
          noValidate
          onSubmit={handleSubmit(handleForm)}
        >
          <h1 className={styles.heading}>Trendiva</h1>

          <input
            className={styles.input}
            id="username"
            type="text"
            placeholder="Username"
            autoComplete="off"
            {...register("username")}
          />
          {errors.username && (
            <p className={styles.errorMsg}>{errors.username.message}</p>
          )}

          <input
            className={styles.input}
            id="password"
            type="password"
            placeholder="Password"
            autoComplete="off"
            {...register("password")}
          />
          {errors.password && (
            <p className={styles.errorMsg}>{errors.password.message}</p>
          )}

          <div className={styles.signUp}>
            <button className={styles.button} type="submit">
              Login
            </button>
            <p className={styles.text}>or</p>
            <Link href="/signUp">
              <button type="button" className={styles.button}>
                Create an account
              </button>
            </Link>
          </div>
        </form>
      ) : (
        <h1 className={styles.wlcMsg}>
          Welcome, {username.charAt(0).toUpperCase() + username.slice(1)}!
        </h1>
      )}
    </section>
  );
};

export default LoginForm;
