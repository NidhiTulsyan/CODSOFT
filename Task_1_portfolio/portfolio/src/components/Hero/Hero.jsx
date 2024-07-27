import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hello, I'm Nidhi</h1>
        <p className={styles.description}>
          I am a full-stack developer with 2 Years of experince using React and
          Nodejs.Reach out if you'd like to learn more!
        </p>
        <a href="mailto:tulsyannidhi19@gmail.com" className={styles.contactBtn}> Contact Me</a>
      </div>
      <img src={getImageUrl("hero/heroImage.png")} alt="hero image of me" className={styles.heroImg}/>
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};
