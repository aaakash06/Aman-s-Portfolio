import styles from "./carousel.module.css";
import { images } from "../../constants";

import Carousel from "react-bootstrap/Carousel";
import { motion } from "framer-motion";

function Projects() {
  return (
    <>
    <motion.div className={styles.project}
    animate={{ x: 100 }}
  transition={{ ease: "easeOut", duration: 1.5 }}>

        
      <Carousel fade className={styles.borderr} >
        <Carousel.Item>
          <img src={images.image4} alt="" className={styles.img} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={images.burger} alt="" className={styles.img} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={images.pizza} alt="" className={styles.img} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={images.lady} alt="" className={styles.img} />
        </Carousel.Item>
      </Carousel>
      </motion.div>

  
     </>

  );
}

export default Projects;
