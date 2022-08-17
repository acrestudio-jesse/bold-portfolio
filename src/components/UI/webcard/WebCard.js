import styles from "./WebCard.module.css";
import { useRef } from "react";
import { useInView } from "framer-motion";

const WebCard = (props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <div
      ref={ref}
      className={styles.card}
      style={{
        backgroundImage: `url('${props.bgImage}')`,
        transform: isInView ? "translateY(0)" : "translateY(-50px)",
        opacity: isInView ? 1 : 0,
        transition: `${(props.delay + 1) * 0.1}s`,
      }}
    >
      {props.children}
    </div>
  );
};

export default WebCard;
