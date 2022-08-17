import MotionLightbox from "../UI/Lightbox";
import MotionLink from "../UI/MotionLink";
import TitleSection from "../UI/TitleSection";
import { AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import style from "./WebDesigner.module.css";

const WebDesigner = ({ imageData }) => {
  return (
    <AnimatePresence>
      <section>
        <TitleSection>Web Designer</TitleSection>
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

export default WebDesigner;
