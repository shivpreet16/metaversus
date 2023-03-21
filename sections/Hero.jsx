'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      whileInView="show"
      initial="hidden"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.h1
          initial="hidden"
          whileInView="show"
          variants={textVariant(1.1)}
          className={styles.heroHeading}
        >
          Metaverse
        </motion.h1>
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center"
        >
          <h1 className={styles.heroHeading}>Ma</h1>
          <div className={styles.heroDText}></div>
          <h1 className={styles.heroHeading}>ness</h1>
        </motion.div>
      </div>
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="relative w-full md:-mt-[20px] -mt-[30px]"
      >
        <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />
        <img
          src="/cover.png"
          alt="cover"
          className='object-cover w-full sm:h-[500px] h-[350px] z-10 relative rounded-tl-[140px]' />
        <a href="#about">
          <div className="relative justify-end flex -mt-[50px] z-10 pr-[40px]">
            <img
              src="/stamp.png"
              alt="stamp"
              className='w-[100px] h-[100px] sm:w-[155px] sm:h-[155px] object-contain'
            />
          </div>
        </a>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
