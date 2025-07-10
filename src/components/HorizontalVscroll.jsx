import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HorizontalVscroll = () => {
    const sectionRef = useRef(null);
    const containerRef = useRef(null);
    const cards = [1, 2, 3, 4, 5];

    useEffect(() => {
        let ctx;

        if (window.innerWidth >= 768) {  // Enable GSAP only on md and above
            ctx = gsap.context(() => {
                const panels = gsap.utils.toArray('.panel');
                const halfWindow = window.innerWidth / 2;

                // Add left padding to center start
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
            // Enable native scroll on mobile
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
                className="flex w-max items-center space-x-8 px-8 overflow-x-auto md:overflow-hidden"
            >
                {cards.map((num) => (
                    <div
                        key={num}
                        className="panel lg:w-80 lg:h-[70vh] md:w-96 w-70 md:h-[600px] h-[450px] bg-blue-300 rounded-xl shadow-lg flex justify-center items-center text-3xl font-bold flex-shrink-0"
                    >
                        Card {num}
                    </div>
                ))}
                <div
                    className="panel lg:w-80 lg:h-[70vh] w-70 h-[60vh] flex items-center rounded-xl text-3xl font-bold flex-shrink-0"
                >
                    <h1>Endless wonders remain yet to be revealed.</h1>
                </div>
            </div>
        </section>
    );
};

export default HorizontalVscroll;
