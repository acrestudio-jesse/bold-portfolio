import "./ImgModal.css";
import { createPortal } from "react-dom";
import { motion, AnimatePresence, animate } from "framer-motion";

const ImgModal = ({ img, closeModal }) => {
  return createPortal(
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="img-modal"
        onClick={closeModal}
      >
        <div className="image-container">
          <img className="disp-image" src={img.img} />
          <label>{img.name}</label>
        </div>
      </motion.div>
    </AnimatePresence>,
    document.getElementById("overlay")
  );
};

export default ImgModal;
