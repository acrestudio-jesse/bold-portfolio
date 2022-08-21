import TitleSection from "../../UI/TitleSection";
import NavBar from "../../UI/NavBar";
import style from "./Shop.module.css"
import {motion} from "framer-motion"
import { useEffect,useState } from "react";

const Shop = () => {
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
      <TitleSection>Shop</TitleSection>
      <NavBar curPage={"Shop"} />
      
    </section>
    <h3 className={style.soonLabel}>Coming Soon!</h3>
    {loadBGImage && (
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5, x: -400 }}
          transition={{ duration: 1.5 }}
          className={style.bgImg}
          src={"/bg-el/suit.png"}
        />
      )}
    </>
  );
};

export default Shop;
