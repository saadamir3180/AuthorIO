import { motion } from "framer-motion";



const Circle = () => {

  
const icon = {
  hidden: {
    strokeDasharray: "1000", 
    strokeDashoffset: "1000",
  },
  visible: {
    strokeDasharray: "1000",
    strokeDashoffset: "0",
  },
};


  return (
    <svg height="350" width="350">
      <motion.circle
        cx="130"
        cy="160"
        r="145"
        stroke="var(--neon)"
        strokeWidth="20"
        fill="transparent"
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 1, ease: "easeOut" },
        }}
        // style={{ overflow: "visible" }}
        variants={icon}
      />
    </svg>
  );
};

export default Circle;
