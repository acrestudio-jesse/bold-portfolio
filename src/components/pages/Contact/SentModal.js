import { createPortal } from "react-dom";
import style from "./SentModal.module.css";

const SentModal = ({message, closeModal }) => {
  return createPortal(

    <div onClick={closeModal} className={style.modalOverlay}>
    <section className={style.sentModal}>
      <h3 className={style.modMessage}>{message}</h3>
    </section>
    </div>,
    document.getElementById("overlay")
  );
};

export default SentModal;
