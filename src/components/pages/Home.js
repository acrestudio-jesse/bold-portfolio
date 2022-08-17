import { useState, useEffect } from "react";
import MotionLink from "../UI/MotionLink";
import TitleSection from "../UI/TitleSection";
import { motion, AnimatePresence } from "framer-motion";
import NavBar from "../UI/NavBar";
import style from "./Home.module.css";
import { Link } from "react-router-dom";

const Home = ({ imageData }) => {
  const [loadBGImage, setLoadBGImage] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoadBGImage(true);
      console.log("Image Loaded");
    }, 1000);
    return clearTimeout();
  }, []);

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div exit={{opacity:0, x:-500}}>
        <section className={style.nameTag}>
          <TitleSection>Jesse Hickey</TitleSection>
          <NavBar />
        </section>
        <section>
          <Link to="/illustrator">
            <MotionLink className={style.portLink}>Illustrator</MotionLink>
          </Link>
        </section>
        <section>
          <Link to="/muralist">
            <MotionLink className={style.portLink} animationDelay={0.1}>
              Muralist
            </MotionLink>
          </Link>
        </section>

        <section>
          <Link to="/designer">
            <MotionLink className={style.portLink} animationDelay={0.15}>
              Designer
            </MotionLink>
          </Link>
        </section>
        {loadBGImage && (
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className={style.bgImg}
            src={"/bg-el/robo-girl.svg"}
          />
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default Home;
