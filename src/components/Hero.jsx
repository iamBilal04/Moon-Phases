//import ParticlesBackground from './ParticlesBackground'
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { motion } from "framer-motion"

import particlesConfig from "./config/particles-config";
import { fadeIn, slideIn }  from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper";
import { styles } from "../style";

import MoonCanvas from "./canvas/MoonCanvas";
import {heroLogo} from "../assets"

const Hero = () => {
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
}, []);

const particlesLoaded = useCallback(async container => {
    await console.log(container);
}, []);
  return (
    <>
    <div className="absolute">
        <Particles
                  id="tsparticles"
                  init={particlesInit}
                  loaded={particlesLoaded}
                  options={particlesConfig}
          />
      </div>
      <div className='xl:mt-20 xl:mb-32 xl:ml-44 xl:flex-row flex-col-reverse flex gap-24 overline-hidden items-center'>
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className='flex-[0.60] bg-gradient-to-r from-purple-500 border-t-pink-500 p-8 rounded-2xl mt-10'
        >
          <p className={styles.heroHeadText}>Exploring the lunar phases now!</p>
          <h3 className={styles.heroSubText}>&nbsp;&nbsp;&nbsp;&nbsp;Experience the celestial wonders right where &nbsp;&nbsp;&nbsp;you &nbsp;&nbsp;&nbsp;&nbsp;are</h3>
        </motion.div>
        <motion.div 
          variants={fadeIn("right", "spring", 0.75)}
          className="object-cover">
          <img src={heroLogo} alt="moon" className="h-90px w-90px z-10"/>
        </motion.div>
          
        {/* <MoonCanvas /> */}
      </div>
    </>
  )
}

export default SectionWrapper(Hero, "Hero")