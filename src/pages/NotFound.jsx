import '../styles/Page.css'
import { motion } from 'framer-motion'
const NotFound = () => {
  return (
    <motion.div className="box page"
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    >
    <div className='page'>404</div>
    </motion.div>
  )
}

export default NotFound