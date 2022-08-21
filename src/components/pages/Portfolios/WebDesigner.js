import TitleSection from "../../UI/TitleSection";
import { AnimatePresence } from "framer-motion";
import NavBar from "../../UI/NavBar";
import WebCardContainer from "../../UI/webcard/WebCardContainer";

const WebDesigner = ({ imageData }) => {
  return (
    <AnimatePresence>
      <section>
        <TitleSection>Web Designer</TitleSection>
        <NavBar />
      </section>
      <WebCardContainer projectData={imageData} />
    </AnimatePresence>
  );
};

export default WebDesigner;
