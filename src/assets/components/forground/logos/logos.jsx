import React from "react";
import { RxInstagramLogo } from "react-icons/rx";
import { IoLogoFacebook } from "react-icons/io";
import { FaTwitterSquare } from "react-icons/fa";
import { BsRecord2 } from "react-icons/bs";
import styles from "./logos.module.css";
import { motion } from "framer-motion";

function Logos() {
  return (
    <>
      <span className={styles.icons}>
        <motion.a
          whileHover={{ scale: 1.2 }}
          className={styles.icun}
          href="https://www.facebook.com/aman.p2004515"
        >
          {" "}
          <IoLogoFacebook className={styles.icon} />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2 }}
          className={styles.icun}
          href="https://www.facebook.com/aman.p2004515"
        >
          {" "}
          <FaTwitterSquare className={styles.icon} />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2 }}
          className={styles.icun}
          href="https://www.instagram.com/a.mannn___/"
        >
          {" "}
          <RxInstagramLogo className={styles.icon} />
        </motion.a>
      </span>

      <span className={styles.record}>
        <motion.a
          whileHover={{ scale: 1.2 }}
          className={styles.icun}
          href="https://www.instagram.com/a.mannn___/"
        >
          {" "}
          <BsRecord2 className={styles.icon} />
        </motion.a>
      </span>
    </>
  );
}

export default Logos;
