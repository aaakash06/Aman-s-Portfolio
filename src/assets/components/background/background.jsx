import { RxOpacity } from "react-icons/rx";
import { images } from "../../constants";
import styles from './background.module.css'
import { motion } from "framer-motion"
// import navLogo from "./../img/result2.png";

export default function Background() {
  return (
    <motion.div whileInView={{y:[-900,0]} } 
    transition={{ ease: "easeOut", duration: 2 ,delay:.2}}
    className={styles.background}>
      <div className={styles.logos}>
        <motion.img 
        whileInView={{  opacity:[0,1]}}  
        transition={{ ease: "easeOut", duration: 2.5, delay:2 }}
        src={images.mainLogo} />

        {/* <img className="navLogo" src={navLogo} alt="" /> */}

        
      </div>
    </motion.div>
  );
}
