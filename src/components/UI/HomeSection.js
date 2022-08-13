import { motion, AnimatePresence} from "framer-motion";
import { forwardRef } from "react";

const HomeSection = forwardRef(({ animationDelay, children, className }, ref) => {
  return (
    <AnimatePresence>
      <section ref={ref} className={className}>
        <motion.h1
          initial={{ opacity: 0, x: 500 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -500 }}
          transition={{ delay: animationDelay }}
        >
          {children}
        </motion.h1>
      </section>
    </AnimatePresence>
  );
});

const MotionHomeSection = motion(HomeSection, { forwardMotionProps: true });

export default MotionHomeSection;
