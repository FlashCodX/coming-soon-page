import { useState } from "react";
import styles from "./styles/App.module.css";

const hero = require("./assets/hero-desktop.jpg");
const logo = require("./assets/logo.svg").default;
const errorIcon = require("./assets/icon-error.svg").default;
const arrowIcon = require("./assets/icon-arrow.svg").default;

const {
  container,
  leftContainer,
  inputContainer,
  formContainer,
  rightContainer,
  errorLabel,
  mobileLogo,
  logoContainer,
  attribution,
} = styles;
export const App = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const checkField = () => {
    value.includes("@") ? setError(false) : setError(true);
  };
  return (
    <>
      <main className={container}>
        <div className={mobileLogo}>
          <img src={logo} alt="logo" />
        </div>

        <div className={leftContainer}>
          <div className={logoContainer}>
            <img src={logo} alt="logo" />
          </div>
          <h1>
            <span> We're</span> coming soon
          </h1>
          <p>
            Hello fellow shoppers! We're currently building our new fashion
            store. Add your email below to stay up-to-date with announcements
            and our launch deals.
          </p>
          <div className={formContainer}>
            <div className={inputContainer}>
              <input
                type="email"
                style={
                  !error
                    ? { border: "2px solid var(--desaturated-red)" }
                    : { border: "2px solid var(--soft-red)" }
                }
                value={value}
                onChange={(e) => setValue(e.target.value)}
                required
                placeholder="Email Address"
              />
              {error && <img src={errorIcon} alt="errorIcon" />}
              <button onClick={() => checkField()}>
                <img src={arrowIcon} alt="arrow" />
              </button>
            </div>
            {error && (
              <div className={errorLabel}>Please provide a valid email</div>
            )}
          </div>
        </div>
        <div className={rightContainer}>
          <img src={hero} alt="hero" />
        </div>
      </main>
      <footer>
        <p className={attribution}>
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/luispintodev/"
          >
            Luís Pinto
          </a>
          .
        </p>
      </footer>
    </>
  );
};
