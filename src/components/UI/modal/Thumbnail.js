import "./Thumbnail.css";
import { motion } from "framer-motion";
import { forwardRef } from "react";

const Thumbnail = forwardRef(({ image, imgModalOpenHandler, id }, ref) => {
  return (
    <img
      ref={ref}
      className="thumbnail"
      src={image.image}
      alt={image.alt}
      onClick={imgModalOpenHandler}
      id={id}
      name={image.name}
    />
  );
});

const MotionThumbnail = motion(Thumbnail, { forwardMotionProps: true });

export default MotionThumbnail;
