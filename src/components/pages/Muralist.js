import MotionLightbox from "../UI/Lightbox";
import MotionLink from "../UI/MotionLink";
import TitleSection from "../UI/TitleSection";
import { AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import style from "./Muralist.module.css";

const Muralist = ({ imageData }) => {

  return (
    <AnimatePresence>
      <section>
        <TitleSection>Muralist</TitleSection>
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

export default Muralist;
