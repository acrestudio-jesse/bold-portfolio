import { motion, AnimatePresence } from "framer-motion";
import { forwardRef } from "react";
import style from "./MotionLink.module.css"

const Link = forwardRef(({ animationDelay, children, className }, ref) => {
  return (
    <AnimatePresence>
      <motion.button
        ref={ref}
        className={className}
        initial={{ opacity: 0, x: 500 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -500 }}
        transition={{ delay: animationDelay }}
      >
        {children}
      </motion.button>
    </AnimatePresence>
  );
});

const MotionLink = motion(Link, { forwardMotionProps: true });

export default MotionLink;
