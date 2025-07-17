import React from 'react'
import img from '../assets/metacrafterss.png';
import imgW from '../assets/metacrafterssW.png';
import ind from '../assets/indflag.png';
import chn from '../assets/chinaflag.png';
import usa from '../assets/usaflag.png';
import indo from '../assets/indoflag.png';
import earth from '../assets/earth1.mp4';
import meta from '../assets/meta.mp4';
import { Link } from 'react-router-dom';
import { SpinningText } from "@/components/magicui/spinning-text";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import HorizontalVscroll from '@/components/HorizontalVscroll';
import ServiceMenu from '@/components/ServiceMenu';
import { motion } from 'framer-motion';
import VideoSection from '@/components/VideoSection';
const Home = () => {

  const { ref, inView } = useInView({
    threshold: 0.1, // 50% visible triggers change
  });
  useEffect(() => {
    document.body.style.backgroundColor = inView ? "black" : "#eee8d5";

    return () => {
      // Reset background on component unmount
      document.body.style.backgroundColor = "#eee8d5";
    };
  }, [inView]);

  return (
    <>
      <div className=' lg:px-12 mb:px-10 px-5 lg:mt-10 mt-0 lg:mb-28 mb-5 '>
        <div className='flex flex-wrap lg:gap-2 gap-8 justify-around items-center '>

          <div className='flex-col lg:justify-left  justify-center '>
            <motion.div
              initial={{ x: -250, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
              className='h-18  items-center lg:justify-start justify-center  hidden md:flex mx-16'>

              <SpinningText className="text-lg font-semibold" duration={6} radius={6}>
                WELCOME TO METACRAFTER
              </SpinningText>
            </motion.div>
            <motion.div
              initial={{ x: -250, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0 }}
              viewport={{ once: true }}
              className='lg:mt-14 mt-6 mb-10 space-y-2 '>
              <h1 className={`montes lg:text-6xl   lg:leading-20 md:text-6xl ${inView ? ' text-white' : ' text-black'}  text-4xl lg:text-left md:text-left text-center space-y-11  font-extrabold`}>BEYOND <span className='text-amber-400'>DIGITAL</span> <br /> INTO STORYTELLING
              </h1>
              <div>
                <h1 className={`montes lg:text-6xl lg:leading-20  md:text-6xl ${inView ? ' text-white' : ' text-black'} text-4xl  lg:text-left md:text-left text-center space-y-11  font-extrabold `}>CRAFTED TO BE FELT, <br /> <span className='text-amber-400 underline-offset-8 decoration-black ' >NOT JUST SEEN</span> </h1>
              </div>


            </motion.div>
          </div>
            <div className='items-center lg:justify-start justify-center  flex md:hidden'>

              <div className='w-76 h-36 rounded-[100px] '>
                    <video
            src={meta}
            autoPlay
            muted
            loop
            playsInline
            className="loader-video rounded-[100px] "/>
              </div>
            </div>

          {/* <div className="lg:h-[70vh]  md:h-76 h-80   overflow-hidden"> */}
          <motion.img

            initial={{ x: 250, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
            src={`${inView ? imgW : img}`}
            alt="Background"
            className=" lg:h-[74vh] md:h-[65vh] h-80   overflow-hidden object-cover"
          />
          {/* </div> */}

        </div>
        {/* World map icons*/}

      </div>
      <div className='flex flex-col flex-wrap space-y-3 px-5 md:hidden'>
        <h2 className={`text-lg ${inView ? ' text-white' : ' text-black'} `}>( About Us )</h2>
        <h1 className={`text-5xl font-bold  ${inView ? ' text-amber-300' : ' text-black'} `}>Metacrafter</h1>
        <h2 className={`text-4xl ${inView ? ' text-amber-300' : ' text-black'} font-semibold`}>
          Where creativity meets conversion.
        </h2>
        <h2 className={`text-justify font-medium ${inView ? ' text-white' : ' text-black'} `} >Founded by Aman Kursange, Metacrafter is a creative growth company turning brands into magnetic digital experiences. From cinematic reels to data-backed ad strategies — we don't just market, we craft stories that sell.
          Metacrafter is the brainchild of Aman Kursange — a storyteller, strategist, and builder of digital magic. It's not just a company; it's a movement of modern marketing, where art meets algorithm and design meets depth.
        </h2>
        <br />
        <h2 className={`text-2xl ${inView ? ' text-amber-300' : ' text-black'}  font-semibold `}>We don't just market.</h2>
        <h2 className={`font-medium text-xl ${inView ? ' text-white' : ' text-black'} `}>We craft moods. Build presence. And turn noise into aesthetic narrative.</h2>
        <h2 className={`text-justify font-medium ${inView ? ' text-white' : ' text-black'} `} >From cinematic reels to scroll-stopping campaigns, from sleek brand identities to performance-driven ads — Metacrafter is your creative growth partner for the now and the next.
        </h2>
        <h1 className={`${inView ? ' text-amber-300' : ' text-black'}`}>
          For brands with soul.
        </h1>
        <h1  className={`${inView ? ' text-amber-300' : ' text-black'}`} >For stories worth remembering.
        </h1>
        <h1 className={`${inView ? ' text-amber-300' : ' text-black'}`}>For impact that linger</h1>
      </div>
      <div ref={ref}>
        <div className='lg:mt-24 mt-10'>

          <div className={`text-center ${inView ? ' text-white' : ' text-black'}  `}>
            <motion.h1
             initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.1 }}
            className='lg:text-5xl montes text-3xl  font-extrabold'>
              Did You Know <span className='text-amber-300'>?</span>
            </motion.h1>
            <motion.h2 
             initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.1 }}
            className='lg:text-3xl text-2xl px-5 font-semibold mt-3'>If our community were a country, it’d be the 3rd largest after India and China!</motion.h2>

            <div className='lg:px-60 px-5'>

              <div className='flex   flex-wrap px-5  lg:justify-center md:justify-center justify-start mt-10  lg:gap-y-10 gap-y-2.5 gap-10'>

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
        <div className=''>
          <h1 className={`text-center text-4xl mt-28  ${inView ? ' text-white' : ' text-black'} font-extrabold text-black`}>CASE STUDIES</h1>
          <HorizontalVscroll inView={inView} />
        </div>
        <div className=' text-center  '>

          <div className='lg:px-52 px-2'>
          <h1 className='text-white lg:text-5xl text-4xl font-extrabold'>Specialization</h1>
          <h2 className='lg:text-3xl lg:mt-6 mt-5 text-white text-center  text-xl'>We’re passionate about identifying cutting-edge digital innovations that empower visionary brands to break boundaries and create meaningful impact</h2>

          </div>
          <ServiceMenu inView={inView} />
          <div className='lg:mt-7 mt-4'>
            <Link onClick={() => window.scrollTo(0, 0)} to="/service" className={`  font-bold ${inView ? ' text-white' : ' text-black'} lg:text-3xl text-xl `} >More Services  </Link>

          </div>
        </div>
      </div>
      <div className='lg:mt-10 mt-5 '>
        <VideoSection inView={inView} />
      </div>
    </>
  )
}

export default Home
