import { RiReactjsLine } from "react-icons/ri"
import { SiMongodb } from "react-icons/si"
import { FaNodeJs } from "react-icons/fa"
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { FaPython } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import { TbAugmentedReality2 } from "react-icons/tb";
import { PiVirtualReality } from "react-icons/pi";
import { FaUnity } from "react-icons/fa6"
import { SiOpencv } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
import {motion} from "framer-motion";
import { SiFastapi } from "react-icons/si";
import { SiTwilio } from "react-icons/si";
import { SiNgrok } from "react-icons/si";
import { AiFillOpenAI } from "react-icons/ai"

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [-10, 10],  // ✅ Keeps the movement subtle
        transition: {
            duration: duration,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'reverse',
        },
    },
})

const iconVariantsOp = (duration) => ({
    initial: { y: 10 },
    animate: {
        y: [10, -10],  // ✅ Changed to match a better range
        transition: {
            duration: duration,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'reverse',
        },
    },
})

const Technologies = () => {
    return (
      <div className='border-b border-neutral-800 pb-24'>
          <h1 className='my-20 text-center text-4xl'>Technologies</h1>
          <motion.div whileInView={{opacity:1, x:0}} initial={{ opacity:0, x:-100 }} transition={{ duration:0.5 }} className="flex flex-wrap items-center justify-center gap-4">
              <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">
                  <motion.div variants={iconVariants(1)} initial='initial' animate='animate' className="rounded-2xl border-4 border-neutral-800 p-4 mb-10">
                      <RiReactjsLine className="text-7xl text-cyan-400"/>
                  </motion.div>
              </a>
              <a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer">
                  <motion.div variants={iconVariantsOp(1)} initial='initial' animate='animate' className="rounded-2xl border-4 border-neutral-800 p-4 mb-10">
                      <SiMongodb className="text-7xl text-green-500"/>
                  </motion.div>
              </a>
              <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">
                  <motion.div variants={iconVariants(1)} initial='initial' animate='animate' className="rounded-2xl border-4 border-neutral-800 p-4 mb-10">
                      <FaNodeJs className="text-7xl text-green-500"/>
                  </motion.div>
              </a>
              <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer">
                  <motion.div variants={iconVariantsOp(1)} initial='initial' animate='animate' className="rounded-2xl border-4 border-neutral-800 p-4 mb-10">
                      <FaHtml5 className="text-7xl text-orange-500"/>
                  </motion.div>
              </a>
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer">
                  <motion.div variants={iconVariants(1)} initial='initial' animate='animate' className="rounded-2xl border-4 border-neutral-800 p-4 mb-10">
                      <FaCss3Alt className="text-7xl text-blue-500"/>
                  </motion.div>
              </a>
              <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">
                  <motion.div variants={iconVariantsOp(1)} initial='initial' animate='animate' className="rounded-2xl border-4 border-neutral-800 p-4 mb-10">
                      <RiTailwindCssFill className="text-7xl text-sky-400"/>
                  </motion.div>
              </a>
              <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
                  <motion.div variants={iconVariants(1)} initial='initial' animate='animate' className="rounded-2xl border-4 border-neutral-800 p-4 mb-10">
                      <IoLogoJavascript className="text-7xl text-yellow-300"/>
                  </motion.div>
              </a>
              <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer">
                  <motion.div variants={iconVariantsOp(1)} initial='initial' animate='animate' className="rounded-2xl border-4 border-neutral-800 p-4 mb-10">
                      <FaPython className="text-7xl text-blue-700"/>
                  </motion.div>
              </a>
              <a href="https://learn.microsoft.com/en-us/dotnet/csharp/" target="_blank" rel="noopener noreferrer">
                  <motion.div variants={iconVariants(1)} initial='initial' animate='animate' className="rounded-2xl border-4 border-neutral-800 p-4 mb-10">
                      <TbBrandCSharp className="text-7xl text-purple-600"/>
                  </motion.div>
              </a>
              <a href="https://developers.meta.com/horizon/develop/" target="_blank" rel="noopener noreferrer">
                  <motion.div variants={iconVariantsOp(1)} initial='initial' animate='animate' className="rounded-2xl border-4 border-neutral-800 p-4 mb-10">
                      <TbAugmentedReality2 className="text-7xl text-teal-500"/>
                  </motion.div>
              </a>
              <a href="https://developers.meta.com/horizon/develop/" target="_blank" rel="noopener noreferrer">
                  <motion.div variants={iconVariants(1)} initial='initial' animate='animate' className="rounded-2xl border-4 border-neutral-800 p-4 mb-10">
                      <PiVirtualReality className="text-7xl text-purple-600"/>
                  </motion.div>
              </a>
              <a href="https://unity.com/" target="_blank" rel="noopener noreferrer">
                  <motion.div variants={iconVariantsOp(1)} initial='initial' animate='animate' className="rounded-2xl border-4 border-neutral-800 p-4 mb-10">
                      <FaUnity className="text-7xl text-gray-400"/>
                  </motion.div>
              </a>
              <a href="https://opencv.org/" target="_blank" rel="noopener noreferrer">
                  <motion.div variants={iconVariants(1)} initial='initial' animate='animate' className="rounded-2xl border-4 border-neutral-800 p-4 mb-10">
                      <SiOpencv className="text-7xl text-red-600"/>
                  </motion.div>
              </a>
              <a href="https://docs.github.com/en" target="_blank" rel="noopener noreferrer">
                  <motion.div variants={iconVariantsOp(1)} initial='initial' animate='animate' className="rounded-2xl border-4 border-neutral-800 p-4 mb-10">
                      <FaGithub className="text-7xl text-gray-500"/>
                  </motion.div>
              </a>
              <a href="https://fastapi.tiangolo.com/" target="_blank" rel="noopener noreferrer">
                  <motion.div variants={iconVariants(1)} initial='initial' animate='animate' className="rounded-2xl border-4 border-neutral-800 p-4 mb-10">
                      <SiFastapi className="text-7xl text-green-700"/>
                  </motion.div>
              </a>
              <a href="https://www.twilio.com/docs" target="_blank" rel="noopener noreferrer">
                  <motion.div variants={iconVariantsOp(1)} initial='initial' animate='animate' className="rounded-2xl border-4 border-neutral-800 p-4 mb-10">
                      <SiTwilio className="text-7xl text-red-600"/>
                  </motion.div>
              </a>
              <a href="https://ngrok.com/docs/" target="_blank" rel="noopener noreferrer">
                  <motion.div variants={iconVariants(1)} initial='initial' animate='animate' className="rounded-2xl border-4 border-neutral-800 p-4 mb-10">
                      <SiNgrok className="text-7xl text-purple-600"/>
                  </motion.div>
              </a>
              <a href="https://platform.openai.com/docs/api-reference/introduction" target="_blank" rel="noopener noreferrer">
                  <motion.div variants={iconVariantsOp(1)} initial='initial' animate='animate' className="rounded-2xl border-4 border-neutral-800 p-4 mb-10">
                      <AiFillOpenAI className="text-7xl text-teal-600"/>
                  </motion.div>
              </a>
          </motion.div>
      </div>
    )
  }
  
  export default Technologies;
  