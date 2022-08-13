import { motion, AnimatePresence} from "framer-motion";
import { forwardRef } from "react";

const HomeSection = forwardRef(({ animationDelay, children, className }, ref) => {
  return (
    <AnimatePresence>
        <motion.h1
        ref={ref} className={className}
          initial={{ opacity: 0, x: 500 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -500 }}
          transition={{ delay: animationDelay }}
        >
          {children}
        </motion.h1>
    </AnimatePresence>
  );
});

const MotionHomeSection = motion(HomeSection, { forwardMotionProps: true });

export default MotionHomeSection;
