/* eslint-disable */
'use client';

import { motion } from 'framer-motion';

import { socials } from '../constants';
import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.paddings} py-8 relative`}
  >
    <div className="footer-gradient" />

    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">Enter Metaverse</h4>
        <button type='button ' className='flex items-centerh-fit py-4 px-6 bg-[#25618b] rounded-[32px] gap-[12px]'>
          <img src="/headset.svg" alt="headset" className="w-[24px] h-[24px] object-contain" />
          <span className="uppercase text-white text-[16px]">Enter the metaverse</span>
        </button>
      </div>
      <div className="flex flex-col">
        <div className="h-[2px] opacity-20 bg-white mb-8" />
      </div>
      <div className='flex justify-between items-center'>
        <h4 className="text-white font-extrabold text-[24px]">METAVERSUS</h4>
        <div className="flex gap-4">
          {socials.map((social) => (
            <img
              key={social.name}
              src={social.url}
              alt={social.name}
              className="w-[24px] h-[24px] object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
