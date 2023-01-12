import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import "./App.css";

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Char({ value }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 700);
  return (
    <section className="h-screen grid place-items-center snap-center text-7xl md:text-9xl">
      <div ref={ref} className="grid place-items-center">
        <AnimatePresence>
          <motion.span
            style={{ y }}
            initial={{ letterSpacing: '0.05em' }}
            whileInView={{  letterSpacing: '0em' }}
            transition={{ duration: 1 }}
            className="absolute bg-clip-text text-transparent bg-gradient-to-r from-slate-50 to-violet-500 "
          >
            {value}
          </motion.span>
        </AnimatePresence>
      </div>
    </section>
  );
}

function App() {
  const text = ["just", "do", "it", "you're the best"];
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <div className="uppercase text-center">
      <motion.div
        style={{ scaleX }}
        className="fixed bg-gradient-to-r from-slate-50 to-violet-500 h-1 rounded-full my-4  inset-0 origin-center"
      />
      <div className="snap-mandatory snap-y">
        {text.map((t, i) => (
          <Char key={i} value={t} />
        ))}
      </div>
    </div>
  );
}

export default App;
