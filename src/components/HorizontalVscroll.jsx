import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import img4 from '../assets/4.png';
import img5 from '../assets/5.png';
import img6 from '../assets/6.png';

gsap.registerPlugin(ScrollTrigger);

const HorizontalVscroll = ({ inView }) => {
    const sectionRef = useRef(null);
    const containerRef = useRef(null);

    const images = [img1, img2, img3, img4, img5, img6]; // Array of imported images

    useEffect(() => {
        let ctx;

        if (window.innerWidth >= 1024) {
            ctx = gsap.context(() => {
                const panels = gsap.utils.toArray('.panel');
                const halfWindow = window.innerWidth / 2;

                containerRef.current.style.paddingLeft = `${halfWindow - 128}px`;

                const totalScroll = containerRef.current.scrollWidth - window.innerWidth;

                gsap.to(panels, {
                    xPercent: -100 * (panels.length - 1),
                    ease: 'none',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        pin: true,
                        scrub: 1,
                        end: "+=" + totalScroll,
                    },
                });
            }, sectionRef);
        } else {
            containerRef.current.style.paddingLeft = '0';
        }

        return () => ctx && ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative lg:h-screen md:h-[720px] h-[550px] flex items-center overflow-hidden"
        >
            <div
                ref={containerRef}
                className="flex w-max items-center lg:space-x-3 md:space-x-3 space-x-2 px-8 overflow-x-auto md:overflow-hidden"
            >
                {images.map((img, index) => (
                    <div
                        key={index}
                        className="panel lg:w-80 lg:h-[70vh] md:w-96 w-70 md:h-[600px] h-[450px] rounded-xl shadow-lg flex justify-center items-center text-3xl font-bold flex-shrink-0"
                    >
                        <img
                            src={img}
                            alt={`Card ${index + 1}`}
                            className="max-w-full max-h-full object-contain rounded-lg"
                        />
                    </div>
                ))}

                <div className="panel lg:w-80 lg:h-[70vh] w-70 h-[60vh] flex items-center rounded-xl text-3xl font-bold flex-shrink-0">
                    <h1 className={`${inView ? 'text-white' : 'text-black'}`}>
                        Endless wonders remain yet to be revealed.
                    </h1>
                </div>
            </div>
        </section>
    );
};

export default HorizontalVscroll;
