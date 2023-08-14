import React from 'react'
import Lottie from 'lottie-react';
import some_lottie from './animation_lkstr2k4.json'
import { Link } from 'react-router-dom';
import { APPNAME } from './App';

const Component = () => {
    return (
        <div className="flex justify-center items-center bg-blue-500 h-screen m-0">
            <Lottie animationData={some_lottie} loop={true} style={{ width: '40%' }} />
            <Link to={`${APPNAME}/H1`} state={{ text: 'ABA' }}>
                Transfer
            </Link>
        </div >
    )
}

export default Component