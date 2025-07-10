import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Hamburgermenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div>
            <div>

                {/* Morphing Dots Menu */}
                <button onClick={toggleMenu} className="w-8 h-8 focus:outline-none">
                    <svg viewBox="25 25 50 50" className="w-8 h-8 ">
                        {/* Top-left dot (filled) */}
                        <circle
                            cx="35"
                            cy="35"
                            r="8"
                            fill="black"
                            className="transition-all duration-700 ease-in-out"
                        />

                        {/* Top-right dot (border only) */}
                        <circle
                            cx="65"
                            cy="35"
                            r="8"
                             fill="black"
                            className="transition-all duration-700 ease-in-out"
                        />

                        {/* Bottom-left dot (filled) */}
                        <circle
                            cx="35"
                            cy="65"
                            r="8"
                            fill="black"
                            className="transition-all duration-700 ease-in-out"
                        />

                        {/* Bottom-right dot (border only) */}
                        <circle
                            cx="65"
                            cy="65"
                            r="8"
                            fill="none"
                            stroke="black"
                            strokeWidth="2"
                            className="transition-all duration-700 ease-in-out"
                        />
                    </svg>

                </button>
            </div>

            {/* Menu Items */}
            <div
                className={`absolute left-0 right-0 top-full z-50 bg-[#fffbee] shadow-md  overflow-hidden ${isOpen ? 'max-h opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className='ml-26'>

                <ul className="flex flex-col text-5xl font-bold gap-y-8 p-6">
                    <li><Link to="/" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>Home</Link></li>
                    <li><Link to="/about" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>About</Link></li>
                    <li><Link to="/contact" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>Contact</Link></li>
                    <li><Link to="/service" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>Services</Link></li>
                    <li><Link to="/hire" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>Hiring</Link></li>
                </ul>
                </div>
            </div>
        </div>
    )
}

export default Hamburgermenu
