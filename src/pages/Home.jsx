import React from 'react'
import img from '../assets/metacrafterss.png';
import ind from '../assets/indflag.png';
import chn from '../assets/chinaflag.png';
import usa from '../assets/usaflag.png';
import indo from '../assets/indoflag.png';
import earth from '../assets/earth1.mp4';
import { Link } from 'react-router-dom';
import { SpinningText } from "@/components/magicui/spinning-text";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import HorizontalVscroll from '@/components/HorizontalVscroll';
import ServiceMenu from '@/components/ServiceMenu';
import { motion } from 'framer-motion';
const Home = () => {

  const { ref, inView } = useInView({
    threshold: 0.1, // 50% visible triggers change
  });
  useEffect(() => {
    document.body.style.backgroundColor = inView ? "black" : "#fffbee";

    return () => {
      // Reset background on component unmount
      document.body.style.backgroundColor = "#fffbee";
    };
  }, [inView]);



  return (
    <>
      <div className=' lg:px-12 mb:px-10 px-5 mt-10 lg:mb-28 mb-5 '>
        <div className='flex flex-wrap gap-10 justify-around items-center '>

          <div className='flex-col lg:justify-left  justify-center '>
            <motion.div
              initial={{ x: -250, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}

              className='h-20  items-center lg:justify-start justify-center  hidden md:flex mx-16'>

              <SpinningText className="lg:text-lg font-semibold" duration={8} radius={6}>
                WELCOME TO METACRAFTER
              </SpinningText>

            </motion.div>
            <motion.div
              initial={{ x: -250, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0 }}

              className='mt-14 mb-10 space-y-2 '>
              <h1 className='montes lg:text-7xl   lg:leading-20 md:text-6xl  text-5xl lg:text-left md:text-left text-center space-y-11  font-extrabold'>WE <span className='text-amber-300'>CREATE</span> <br /> MEMORABLE <br /> MOMENTS
              </h1>
              <div>
                <h1 className='montes lg:text-7xl lg:leading-20  md:text-6xl text-5xl lg:text-left text-center space-y-11  font-extrabold'>FOR <span className='text-amber-300' >BRANDS</span> </h1>
              </div>



            </motion.div>
            <div className='h-20  items-center lg:justify-start justify-center  flex md:hidden mx-16'>

              <SpinningText className="lg:text-lg font-semibold" duration={8} radius={6}>
                WELCOME TO METACRAFTER
              </SpinningText>

            </div>
          </div>

          {/* <div className="lg:h-[70vh]  md:h-76 h-80   overflow-hidden"> */}
          <motion.img

            initial={{ x: 250, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            src={img}
            alt="Background"
            className=" lg:h-[70vh] md:h-[65vh] h-72   overflow-hidden object-cover"
          />

        </div>
        {/* World map icons*/}

      </div>
      <div ref={ref}>
        <div className='lg:mt-24 mt-1'>

          <div className={`text-center ${inView ? ' text-white' : ' text-black'}  `}>
            <h1 className='lg:text-5xl montes text-3xl  font-extrabold'>
              FUN FACTS <span className='text-amber-300'>?</span>
            </h1>
            <h2 className='lg:text-3xl text-2xl px-5 font-semibold mt-3'>Our following would rank as the third most populous 'country' after India and China.</h2>

            <div className='lg:px-60 px-5'>

              <div className='flex   flex-wrap px-5  lg:justify-center justify-start mt-10  lg:gap-y-10 gap-y-2.5 gap-10'>

                <div className='flex gap-4   items-center'>
                  <img src={ind} className='lg:w-12 w-10 rounded-md' alt="" />
                  <NumberTicker value={1463865525} className={`lg:text-3xl text-xl ${inView ? ' text-white' : ' text-black'} font-semibold`} />
                </div>
                <div className='flex gap-4 items-center'>
                  <img src={chn} className='lg:w-12 w-10 rounded-md' alt="" />
                  <NumberTicker value={1416074742} className={`lg:text-3xl text-xl ${inView ? ' text-white' : ' text-black'} font-semibold`} />
                </div>
                <div className='flex gap-4 items-center'>
                  <img src={ind} className='lg:w-12 w-10 rounded-md' alt="" />
                  <NumberTicker value={362034432} className={`lg:text-3xl text-xl ${inView ? ' text-white' : ' text-black'} font-semibold`} />
                </div>
                <div className='flex gap-4 items-center'>
                  <img src={usa} className='lg:w-12 w-10 rounded-md' alt="" />
                  <NumberTicker value={342034432} className={`lg:text-3xl text-xl ${inView ? ' text-white' : ' text-black'} font-semibold`} />
                </div>
                <div className='flex gap-4 items-center'>
                  <img src={indo} className='lg:w-12 w-10 rounded-md' alt="" />
                  <NumberTicker value={284438800} className={`lg:text-3xl text-xl ${inView ? ' text-white' : ' text-black'} font-semibold`} />
                </div>


              </div>
            </div>

          </div>
        </div>
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className='mt-10 hidden md:flex  mb-20' >
          <video
            src={earth}
            autoPlay
            muted
            loop
            playsInline
            className="loader-video"
          />
        </motion.div>
        <div>
          <h1 className={`text-center text-4xl mt-10  ${inView ? ' text-white' : ' text-black'} font-extrabold text-black`}>CASE STUDIES</h1>
          <HorizontalVscroll inView={inView} />
        </div>
        <div className=' text-center mb-20'>

          <h1>OUR BUDDIES</h1>
          <ServiceMenu inView={inView} />
          <div className='lg:mt-7 mt-4'>
            <Link onClick={() => window.scrollTo(0, 0)} to="/service" className={`  font-bold ${inView ? ' text-white' : ' text-black'} lg:text-3xl text-xl `} >More Services  </Link>

          </div>
        </div>
      </div>
      <div className='mt-44 h-96'></div>
    </>
  )
}

export default Home
