import React from 'react'
import { useLocation } from 'react-router-dom'

const H1 = () => {

    const state = useLocation()?.state;
    const text = state?.text;

    return (
        <div style={{ height: '100vh', width: '100%', display: 'grid', placeItems: 'center' }}>
            <h1 style={{ backgroundColor: '#3fc', padding: '50px', borderRadius: '10px' }}>
                {text}
            </h1>
        </div>
    )
}

export default H1