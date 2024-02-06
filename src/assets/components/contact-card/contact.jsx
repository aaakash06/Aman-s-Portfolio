import { useEffect, useRef } from "react";
import { IoIosSend } from "react-icons/io";
import styles from './contact.module.css'
import { motion } from "framer-motion";


export default function Contact(){
const contactCard = useRef()

// useEffect(()=>{
// // setTimeout(()=>{
// //      console.log(contactCard)
// //      contactCard.current.style.visibility = 'visible';

// // },5000)
    
// })

return(

<>
<div

>
<motion.div className={styles.contactCard} ref={contactCard}  whileInView={{opacity:[0,1]}}
  transition={{ ease: "easeOut", duration: 1.5 }}>
<h1>CONTACT</h1>

<input type="text" placeholder="Name" className={styles.input}/>
<input type="text" placeholder="Phone" className={styles.input}/>
<input type="text" placeholder="Email" className={styles.input}/>
<input type="text" placeholder="Message" className={styles.input}/>
<div class={styles.div}>

<button className={styles.submit}> <span> Send Message | <IoIosSend /></span></button>

</div>

     </motion.div>
     
     </div>

</>

)


}