import React from 'react'
import { useLocation } from 'react-router-dom'

const H1 = () => {

    const state = useLocation()?.state;
    const text = state?.text;

    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <h1 style={{ backgroundColor: '#3fc' }}>
                {text}
            </h1>
        </div>
    )
}

export default H1