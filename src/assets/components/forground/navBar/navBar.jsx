import React, { useContext, useRef, useState } from "react";
import styles from "./nvaBar.module.css";
import { ContextApi } from "../../../store/contexApi";
import { images } from "../../../constants";
import { motion } from "framer-motion";

function NavBar() {
  const [isBorder1, setIsBorder1] = useState(false);
  const [isBorder2, setIsBorder2] = useState(false);

  const { isContact, isProject, setIsContact, setIsProject } =
    useContext(ContextApi);
  return (
    <nav>
      <motion.div
       whileHover={{ scale: 1.2 }}
        className={styles.image}
        onClick={() => {
          setIsContact(false);
          setIsProject(false);
          setIsBorder1(false);
          setIsBorder2(false);
        }}
      />

      <div className={styles.clickables}>
        <motion.a
          whileInView={{scale:[0,1]} } 
        transition={{ ease: "easeOut", duration: .2 ,delay:4}}
          href=""
          className={` ${styles.click} ${styles.click1}`}
          onClick={(event) => {
            event.preventDefault();
            if (!isBorder1) setIsBorder1(true);
            if (isBorder2) setIsBorder2(false);
            if (!isProject) setIsProject(true);
            if (isContact) setIsContact(false);
          }}
        >
          Project
          {isBorder1 && <div className={styles.borderr} />}
        </motion.a>

        <motion.a
        whileInView={{scale:[0,1]} } 
        transition={{ ease: "easeOut", duration: .2 ,delay:4}}
          href=""
          className={` ${styles.click}`}
          onClick={(event) => {
            event.preventDefault();

            if (!isBorder2) setIsBorder2(true);
            if (isBorder1) setIsBorder1(false);
            if (!isContact) setIsContact(true);
            if (isProject) setIsProject(false);
          }}
        >
          Contact
          {isBorder2 && <div className={styles.borderr} />}
        </motion.a>
      </div>
    </nav>
  );
}

export default NavBar;
