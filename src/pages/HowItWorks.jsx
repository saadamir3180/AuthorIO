import '../styles/Page.css'
import { motion } from 'framer-motion'
import Loading from '../components/Loading'
const HowItWorks = () => {
  return (
    
    <motion.div className="box page"
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    >
    <div className='page'><Loading/></div>
    </motion.div>
  )
}

export default HowItWorks