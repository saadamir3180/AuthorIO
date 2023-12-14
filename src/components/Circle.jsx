import { motion } from "framer-motion";



const Circle = () => {

  
const icon = {
  hidden: {
    strokeDasharray: "0 1000", 
    strokeDashoffset: "1000",
  },
  visible: {
    strokeDasharray: "1000 1000",
    strokeDashoffset: "0",
  },
};


  return (
    <svg height="350" width="350">
      <motion.circle
        cx="130"
        cy="150"
        r="135"
        stroke="var(--neon)"
        strokeWidth="13"
        fill="transparent"
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 4, ease: "easeInOut" },
        }}
        // style={{ overflow: "visible" }}
        variants={icon}
      />
    </svg>
  );
};

export default Circle;
