import '../styles/Page.css'
import { motion } from 'framer-motion'
import TextEditor from '../components/TextEditor'
import ChatRoom from '../components/ChatRoom'
const WorkSpace = () => {
  return (
    <motion.div className="box page"
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    >
    {/* <div className='workSpace'> */}
    <TextEditor/>
    {/* <ChatRoom/> 
    </div> */}
    </motion.div>
  )
}

export default WorkSpace