'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

import styles from '../styles';
import { ExploreCard, TitleText, TypingText } from '../components';
import { staggerContainer } from '../utils/motion';
import { exploreWorlds } from '../constants'

const Explore = () => {

  const [Active, setActive] = useState('world-2')

  return (
    <section
      id='explore'
      className={`${styles.paddings}`}
    >
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText
          title="| The World"
          textStyles="text-center"
        />
        <TitleText title={<>Choose the world you want<br className='md:block hidden' /> to explore</>}
          textStyles="text-center" />
        <div className="mt-[50px] flex lg:flex-row flex-col gap-5 min-h-[70vh]">
          {exploreWorlds.map((world,index)=>(
            <ExploreCard 
              key={world.id}
              {...world}
              index={index}
              Active={Active}
              handleClick={setActive}
            />
          ))}
        </div>
        
      </motion.div>
      
    </section>
  );
}

export default Explore;
