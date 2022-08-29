import TitleSection from "../../UI/TitleSection";
import NavBar from "../../UI/NavBar";
import style from "./Resume.module.css";
import { motion, AnimatePresence } from "framer-motion";

const Resume = ({ imageData }) => {
  return (
    <AnimatePresence>
      <section>
        <TitleSection>Resume</TitleSection>
        <NavBar curPage={"Resume"} />
      </section>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ delay: 0.4 }}
        className={style.resContainer}
      >
        <img
          className={style.resume}
          src={imageData[0].image}
          alt={imageData[0].alt}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default Resume;
