import MotionLightbox from "../UI/Lightbox";
import MotionLink from "../UI/MotionLink";
import TitleSection from "../UI/TitleSection";
import { AnimatePresence } from "framer-motion";
import style from "./Illustrator.module.css";
import { Link } from "react-router-dom";

const Illustrator = ({ imageData }) => {
  console.log(imageData);
  return (
    <AnimatePresence>
      <section>
        <TitleSection>Illustrator</TitleSection>
        <Link to="/">
          <MotionLink className={style.navBtn} animationDelay={0.5}>
            Home
          </MotionLink>
        </Link>
      </section>
      <MotionLightbox imageData={imageData} />
    </AnimatePresence>
  );
};

export default Illustrator;
