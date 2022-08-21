import MotionLightbox from "../../UI/lightbox/Lightbox";
import TitleSection from "../../UI/TitleSection";
import NavBar from "../../UI/NavBar";

const Muralist = ({ imageData }) => {

  return (
    <>
      <section>
        <TitleSection>Muralist</TitleSection>
        <NavBar />
      </section>
      <MotionLightbox imageData={imageData} />
    </>
  );
};

export default Muralist;
