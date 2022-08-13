import "./ImgModal.css";
import { createPortal } from "react-dom";

const ImgModal = ({ img, closeModal }) => {
  console.log(img);

  return createPortal(
    <div className="img-modal" onClick={closeModal}>
      <div className="image-container">
        <img className="disp-image" src={img.img} />
        <label>{img.name}</label>
      </div>
    </div>,
    document.getElementById("overlay")
  );
};

export default ImgModal;
