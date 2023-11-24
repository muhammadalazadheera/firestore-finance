import { useState } from "react";
import { useSignup } from "../../hooks/useSignup";
// styles
import styles from "./signup.module.css";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const { signup, isPending, error } = useSignup();
  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password, displayName);
  };
  const handleChangeDisplayName = (e) => setDisplayName(e.target.value);
  const handleChangePassword = (e) => setPassword(e.traget.value);
  const handleEmailChange = (e) => setEmail(e.traget.value);

  return (
    <form onSubmit={handleSubmit} className={styles["signup-form"]}>
      <h2>sign up</h2>
      <label>
        <span>email:</span>
        <input type="email" onChange={handleEmailChange} value={email} />
      </label>
      <label>
        <span>password:</span>
        <input
          type="password"
          onChange={handleChangePassword}
          value={password}
        />
      </label>
      <label>
        <span>display name:</span>
        <input
          type="text"
          onChange={handleChangeDisplayName}
          value={displayName}
        />
      </label>
      {!isPending && <button className="btn">Sign up</button>}
      {isPending && (
        <button className="btn" disabled>
          Loading...
        </button>
      )}
      {error && <p>{error}</p>}
      {}
    </form>
  );
}
