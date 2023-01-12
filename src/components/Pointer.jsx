import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

function usePointer(ref) {
  const [point, setPoint] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // console.log(!ref.current);
    // if (!ref.current) return;

    const handlePointerMove = (clientX, clientY) => {
      const element = ref.current;

      const x = clientX - element.offsetLeft - element.offsetWidth / 2;
      const y = clientY - element.offsetTop - element.offsetHeight / 2;
      setPoint({ x, y });

      window.addEventListener("pointermove", handlePointerMove);

      return () => window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return point;
}

function Pointer() {
  const ref = useRef(null);
  const { x, y } = usePointer(ref);
  return (
    <motion.div
      ref={ref}
      className="w-10 h-10 bg-red-500 rounded-full"
      animate={{ x, y }}
      transition={{
        type: "spring",
        damping: 3,
        stiffness: 50,
        restDelta: 0.001,
      }}
    />
  );
}

export default Pointer;
