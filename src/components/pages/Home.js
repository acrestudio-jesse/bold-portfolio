import { useState, useReducer } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MotionLightbox from "../UI/Lightbox";
import TitleSection from "../UI/TitleSection";
import style from "./Home.module.css";

const lightBoxReducer = (state, action) => {
  if (action.type === "illustrator" && state.open !== 1) {
    return (state = { open: 1 });
  } else if (action.type === "muralist" && state.open !== 2) {
    return (state = { open: 2 });
  } else if (action.type === "designer" && state.open !== 3) {
    return (state = { open: 3 });
  } else {
    return (state = { open: null });
  }
};

const Home = ({ imageData }) => {
  const [lightBoxState, lightBoxDispatch] = useReducer(lightBoxReducer, {
    open: null,
  });

  console.log(lightBoxState);

  return (
    <AnimatePresence>
      <motion.div>
        <section>
          <TitleSection className={style.nameTag}>Jesse Hickey</TitleSection>
        </section>
        <section onClick={() => lightBoxDispatch({ type: "illustrator" })}>
          <TitleSection className={lightBoxState.open === 1 && style.openBox}>
            Illustrator
          </TitleSection>
          {lightBoxState.open === 1 && <MotionLightbox imageData={imageData} />}
        </section>
        <section onClick={() => lightBoxDispatch({ type: "muralist" })}>
          <TitleSection animationDelay={0.1}>Muralist</TitleSection>
          {lightBoxState.open === 2 && <MotionLightbox imageData={imageData} />}
        </section>
        <section onClick={() => lightBoxDispatch({ type: "designer" })}>
          <TitleSection animationDelay={0.15}>Designer</TitleSection>
          {lightBoxState.open === 3 && <MotionLightbox imageData={imageData} />}
        </section>
      </motion.div>
    </AnimatePresence>
  );
};

export default Home;
