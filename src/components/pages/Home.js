import { useState, useReducer } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MotionLightbox from "../UI/Lightbox";
import MotionHomeSection from "../UI/HomeSection";
import style from "./Home.module.css";

// const lightBoxReducer  = (state, action) => {


// }



const Home = ({ imageData }) => {
  
    // const [lightBoxState, lightBoxDispatch] = useReducer(lightBoxReducer, {open: null})

    // console.log(lightBoxState);

  const [openLightBox, setOpenLightBox] = useState(null);

  const openLightBoxHandlerIllustrator = () => {
    if (openLightBox !== 1) {
      setOpenLightBox((pres) => (pres = 1));
    } else {

    }
  };

  return (
    <AnimatePresence>
      <motion.div>
        <MotionHomeSection className={style.nameTag}>
          Jesse Hickey
        
        </MotionHomeSection>

        <section onClick={openLightBoxHandlerIllustrator}>
          <motion.h1
            className={openLightBox === 1 && style.openBox}
            initial={{ opacity: 0, x: 500 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -500 }}
            transition={{ delay: 0.05 }}
          >
            Illustrator
          </motion.h1>
          {openLightBox && <MotionLightbox imageData={imageData} />}
        </section>

        <MotionHomeSection animationDelay={0.1}>Muralist</MotionHomeSection>

        <MotionHomeSection animationDelay={0.15}>Designer</MotionHomeSection>
      </motion.div>
    </AnimatePresence>
  );
};

export default Home;
