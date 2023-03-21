/* eslint-disable */
'use client';

import { motion } from 'framer-motion'

import { fadeIn } from '../utils/motion';

const InsightCard = ({ key, imgUrl, title, subtitle, index }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.1, 1)}
    className='flex flex-col md:flex-row gap-4'
  >
    <img
      src={imgUrl}
      alt="planet-01"
      className='md:w-[270px] w-full h-[250px] rounded-[32px] object-cover'
    />
    <div className="w-full flex justify-between lg:ml-7 items-center">
      <div className='flex-1 flex flex-col max-w-[650px]'>
        <h4 className='font-normal lg:text-[42px] text-white text-[26px]'>{title}</h4>
        <p className="text-secondary-white mt-[16px] font-normal lg:text-[20px] text-[14px]">{subtitle}</p>
      </div>
      <div className="w-[50px] h-[50px] border-[1px] bg-transparent rounded-full lg:flex hidden items-center justify-center">
        <img
          src="arrow.svg"
          alt="arrow"
          className='w-[40%] h-[40%] object-contain'
        />
      </div>
    </div>
  </motion.div>
);

export default InsightCard;
