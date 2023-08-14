import React from 'react'
import { useLocation } from 'react-router-dom'

const H1 = () => {

    const state = useLocation()?.state;
    const text = state?.text;

    return (
        <div>{text}</div>
    )
}

export default H1