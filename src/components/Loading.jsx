import React from "react";
import '../styles/Loading.css'
import { motion } from "framer-motion";

const Loading = () => {
  return (
    
    <motion.div className="box"
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    >
    <div className="loader">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        style={{
          margin: "auto",
          background: "rgb(241, 242, 243, 0)",
          display: "block",
          shapeRendering: "auto",
        }}
        width="168px"
        height="168px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <g transform="translate(50,50)">
          <circle
            cx="0"
            cy="0"
            r="8.333333333333334"
            fill="none"
            stroke="#b6e028"
            strokeWidth="2.5"
            strokeDasharray="26.179938779914945 26.179938779914945"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="0 0 0;360 0 0"
              times="0;1"
              dur="0.9345794392523364s"
              calcMode="spline"
              keySplines="0.2 0 0.8 1"
              begin="0"
              repeatCount="indefinite"
            ></animateTransform>
          </circle>
          <circle
            cx="0"
            cy="0"
            r="16.666666666666668"
            fill="none"
            stroke="#2c2828"
            strokeWidth="2.5"
            strokeDasharray="52.35987755982989 52.35987755982989"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="0 0 0;360 0 0"
              times="0;1"
              dur="0.9345794392523364s"
              calcMode="spline"
              keySplines="0.2 0 0.8 1"
              begin="-0.14018691588785046"
              repeatCount="indefinite"
            ></animateTransform>
          </circle>
          <circle
            cx="0"
            cy="0"
            r="25"
            fill="none"
            stroke="#c2c4c9"
            strokeWidth="2.5"
            strokeDasharray="78.53981633974483 78.53981633974483"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="0 0 0;360 0 0"
              times="0;1"
              dur="0.9345794392523364s"
              calcMode="spline"
              keySplines="0.2 0 0.8 1"
              begin="-0.2803738317757009"
              repeatCount="indefinite"
            ></animateTransform>
          </circle>
          <circle
            cx="0"
            cy="0"
            r="23.333333333333336"
            fill="none"
            stroke="#9d9d9f"
            strokeWidth="1.5"
            strokeDasharray="104.71975511965978 104.71975511965978"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="0 0 0;360 0 0"
              times="0;1"
              dur="0.9345794392523364s"
              calcMode="spline"
              keySplines="0.2 0 0.8 1"
              begin="-0.42056074766355134"
              repeatCount="indefinite"
            ></animateTransform>
          </circle>
          <circle
            cx="0"
            cy="0"
            r="25.666666666666664"
            fill="none"
            stroke="#b6e028"
            strokeWidth="1.7000000000000002"
            strokeDasharray="130.89969389957471 130.89969389957471"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="0 0 0;360 0 0"
              times="0;1"
              dur="0.9345794392523364s"
              calcMode="spline"
              keySplines="0.2 0 0.8 1"
              begin="-0.5607476635514018"
              repeatCount="indefinite"
            ></animateTransform>
          </circle>
        </g>
      </svg>
    </div>
    </motion.div>
  );
};

export default Loading;
