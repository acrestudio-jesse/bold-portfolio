import MotionThumbnail from "./Thumbnail";
import ImgModal from "./ImgModal";
import { useState, forwardRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import style from "./Lightbox.module.css"

const initImg = { img: "", name: "" };

const Lightbox = forwardRef(({ imageData }, ref) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [displayImg, setDisplayImg] = useState(initImg);

  const imgModalOpenHandler = (e) => {
    imageData.map((img) => {
      if (img.id !== e.target.id) {
        return;
      }
      setDisplayImg({ img: e.target.src, name: e.target.name });
      setModalOpen(true);
    });
  };

  const ImageModalCloseHandler = () => {
    setDisplayImg("");
    setModalOpen(false);
  };

  return (
    <div ref={ref}>
      <AnimatePresence>
        <ul className={style.itemList}>
          {imageData.map((img, i) => {
            return (
              <MotionThumbnail
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -100 }}
                transition={{ delay: i * 0.04 }}
                image={img}
                key={img.id}
                id={img.id}
                imgModalOpenHandler={imgModalOpenHandler}
              />
            );
          })}
        </ul>
      </AnimatePresence>
      {modalOpen && (
        <ImgModal img={displayImg} closeModal={ImageModalCloseHandler} />
      )}
    </div>
  );
});

const MotionLightbox = motion(Lightbox, { forwardMotionProps: true });

export default MotionLightbox;
