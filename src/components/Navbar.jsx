import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Hamburgermenu from './Hamburgermenu';

const Navbar = () => {


    return (
        <nav className=" lg:px-32 px-6 py-8 relative">
            <div className="flex items-center justify-between  ">
                <div>

                    <h1 className="lg:text-3xl text-2xl font-bold">Meta<span className='font-normal'>Crafter</span></h1>
                </div>
                <div>
                    <Hamburgermenu/>
                </div>
                
            </div>
        </nav>
    );
};

export default Navbar;
