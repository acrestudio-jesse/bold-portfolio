import style from "./Thumbnail.module.css";
import { motion, useInView } from "framer-motion";
import { forwardRef, useRef } from "react";

const Thumbnail = forwardRef(({ image, imgModalOpenHandler, id }, thumb) => {
const artThumb = useRef(null)
const isInView = useInView(artThumb, {once: true})

  return (
    <img
      ref={thumb}
      className={style.thumbnail}
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
