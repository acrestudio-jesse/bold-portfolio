import MotionLightbox from "../../UI/lightbox/Lightbox";
import TitleSection from "../../UI/TitleSection";
import { AnimatePresence } from "framer-motion";
import NavBar from "../../UI/NavBar";

const Illustrator = ({ imageData }) => {
  return (
    <AnimatePresence>
      <section>
        <TitleSection>Illustrator</TitleSection>
        <NavBar />

      </section>
      <MotionLightbox imageData={imageData} />
    </AnimatePresence>
  );
};

export default Illustrator;
