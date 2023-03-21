'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section
  id='about'
  className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0"></div>
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Metaversus" textStyles="text-center" />
    </motion.div>

    <motion.p
      variants={fadeIn('up', 'tween', 0.2, 1)}
      className='mt--[8px] font-normal sm:text-[32px] text-secondary-white text-center flex flex-col  items-center'
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos aliquid necessitatibus officia illum at quas modi aperiam error atque natus optio voluptas minus in, nostrum dolores unde veniam quod consequatur deleniti sequi amet et eius praesentium! Totam non odio, saepe deserunt corporis veniam sunt cupiditate sequi corrupti aliquam tempora quos.
      <a href="#explore">

        <motion.img
          src="/arrow-down.svg"
          alt="arrow"
          variants={fadeIn('down', 'tween', 0.3, 1)}
          className="w-[10px] h-[28px] object-contain mt-[28px]"
        />
      </a>
    </motion.p>
  </section>
);

export default About;
