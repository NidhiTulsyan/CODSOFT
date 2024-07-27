import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";

export const Contact=()=>{
    return <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel Free To React Out!</p>
        </div>
        <ul className={styles.links}>
            <li  className={styles.link}><img src={getImageUrl("contact/emailIcon.png")} alt="email icon"/><a href="mailto:tulsyannidhi19@gmail.com">Email</a></li>
            <li className={styles.link}><img src={getImageUrl("contact/linkedinIcon.png")} alt="linkedin icon"/><a href="https://www.linkedin.com/in/nidhi-tulsyan19/">Linkedin</a></li>
            <li className={styles.link}><img src={getImageUrl("contact/githubIcon.png")} alt="Github icon"/><a href="https://github.com/NidhiTulsyan">Github</a></li>
        </ul>
    </footer>;
}