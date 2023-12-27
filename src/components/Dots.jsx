import React from "react";
import '../styles/Svg.css'
import { motion } from "framer-motion";
import gsap from "gsap";
const Dots = () => {

  // const icon = {
  //   hidden: {
  //     opacity: 0,
  //     scale : "100%",
  //     fill: "rgba(255, 255, 255, 0)"
  //   },
  //   visible: {
  //     opacity: 1,
  //     scale : "105%",
  //     fill: "var(--neon)"
  //   }
  // }


  React.useEffect(()=>{
    gsap.from('.animatedPaths',{ duration:0.4, scale : 0, stagger: 0.03, ease: 'bounce' })
  }, [])

  return (
    <svg
      className={'animatedSvg'}
      fill="var(--neon)"
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="147px"
      height="147px"
      viewBox="-46.95 -46.95 370.07 370.07"
      xmlSpace="preserve"
      stroke="#B6E028"
      strokeWidth="0.00276167"
    >

      <path
        className={'animatedPaths'}
        d="M33.144,2.471C15.336,2.471,0.85,16.958,0.85,34.765s14.48,32.293,32.294,32.293s32.294-14.486,32.294-32.293 S50.951,2.471,33.144,2.471z"
        // variants={icon}
        // initial="hidden"
        // animate="visible"
        // transition={{ duration: 2, delay: 0.15 }}
      ></path>{" "}
      <path
        className={'animatedPaths'}
        d="M137.663,2.471c-17.807,0-32.294,14.487-32.294,32.294s14.487,32.293,32.294,32.293c17.808,0,32.297-14.486,32.297-32.293 S155.477,2.471,137.663,2.471z"
        // variants={icon}
        // initial="hidden"
        // animate="visible"
        // transition={{ duration: 2, delay: 0.17 }}
      ></path>{" "}
      <path
        className={'animatedPaths'}
        d="M243.873,67.059c17.804,0,32.294-14.486,32.294-32.293S261.689,2.471,243.873,2.471s-32.294,14.487-32.294,32.294 S226.068,67.059,243.873,67.059z"
        // variants={icon}
        // initial="hidden"
        // animate="visible"
        // transition={{ duration: 2, delay: 0.19 }}
      ></path>{" "}
      <path
        className={'animatedPaths'}
        d="M33.3,170.539c17.807,0,32.297-14.483,32.297-32.293c0-17.811-14.49-32.297-32.297-32.297S0.002,120.436,0.002,138.246 C0.002,156.056,14.495,170.539,33.3,170.539z"
        // variants={icon}
        // initial="hidden"
        // animate="visible"
        // transition={{ duration: 2, delay: 0.21 }}
      ></path>{" "}
      <path
        className={'animatedPaths'}
        d="M137.819,170.539c17.804,0,32.294-14.483,32.294-32.293c0-17.811-14.478-32.297-32.294-32.297 c-17.813,0-32.294,14.486-32.294,32.297C105.525,156.056,120.012,170.539,137.819,170.539z"
        // variants={icon}
        // initial="hidden"
        // animate="visible"
        // transition={{ duration: 2, delay: 0.23 }}
      ></path>{" "}
      <path
        className={'animatedPaths'}
        d="M244.038,170.539c17.811,0,32.294-14.483,32.294-32.293c0-17.811-14.483-32.297-32.294-32.297 s-32.306,14.486-32.306,32.297C211.732,156.056,226.222,170.539,244.038,170.539z"
        // variants={icon}
        // initial="hidden"
        // animate="visible"
        // transition={{ duration: 2, delay: 0.25 }}
      ></path>{" "}
      <path
        className={'animatedPaths'}
        d="M33.039,209.108c-17.807,0-32.3,14.483-32.3,32.294c0,17.804,14.493,32.293,32.3,32.293s32.293-14.482,32.293-32.293 S50.846,209.108,33.039,209.108z"
        // variants={icon}
        // initial="hidden"
        // animate="visible"
        // transition={{ duration: 2, delay: 0.27 }}
      ></path>{" "}
      <path
        className={'animatedPaths'}
        d="M137.564,209.108c-17.808,0-32.3,14.483-32.3,32.294c0,17.804,14.487,32.293,32.3,32.293 c17.804,0,32.293-14.482,32.293-32.293S155.368,209.108,137.564,209.108z"
        // variants={icon}
        // initial="hidden"
        // animate="visible"
        // transition={{ duration: 2, delay: 0.29 }}
      ></path>{" "}
      <path
        className={'animatedPaths'}
        d="M243.771,209.108c-17.804,0-32.294,14.483-32.294,32.294c0,17.804,14.49,32.293,32.294,32.293 c17.811,0,32.294-14.482,32.294-32.293S261.575,209.108,243.771,209.108z"
        // variants={icon}
        // initial="hidden"
        // animate="visible"
        // transition={{ duration: 2, delay: 0.31 }}
      ></path>{" "}

    </svg>
  );
};

export default Dots;
