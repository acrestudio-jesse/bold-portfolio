import TitleSection from "../../UI/TitleSection";
import NavBar from "../../UI/NavBar";
import style from "./Resume.module.css"
import {motion} from "framer-motion"
import { useEffect,useState } from "react";

const Resume = () => {
  const [loadBGImage, setLoadBGImage] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoadBGImage(true);
    }, 1000);
    return clearTimeout();
  }, []);
  return (
    <>
    <section>
      <TitleSection>Resume</TitleSection>
      <NavBar curPage={"Resume"} />
      
    </section>
    <main>
    <h3 className={style.soonLabel}>Coming Soon!</h3>
    </main>
    {loadBGImage && (
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5, x: -400 }}
          transition={{ duration: 1.5 }}
          className={style.bgImg}
          src={"/bg-el/suit.webp"}
        />
      )}
    </>
  );
};

export default Resume;
