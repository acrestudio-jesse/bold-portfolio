import TitleSection from "../../UI/TitleSection";
import NavBar from "../../UI/NavBar";
import Technologies from "../../UI/resumeComps/Technologies";
import Bio from "../../UI/resumeComps/Bio";
import style from "./Resume.module.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

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
        <Bio/>
        <div className={style.attributes}>
          <div>
            <h3>Skills</h3>
            <ul>
              <li>Illustration</li>
              <li>Project Management</li>
              <li>UI/UX Design</li>
              <li>Art Direction</li>
              <li>Education</li>
            </ul>
          </div>
          <div>
            <h3>Projects</h3>
            <ul>
              <li>Children's Books</li>
              <li>Murals</li>
              <li>Websites</li>
            </ul>
          </div>
          <div>
            <h3>Languages</h3>
            <ul>
              <li>English - Native</li>
              <li>Mandarin - B2</li>
            </ul>
          </div>
        </div>
        <Technologies/>
        <div>
          <h3>Experience</h3>
          <p></p>
        </div>
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
