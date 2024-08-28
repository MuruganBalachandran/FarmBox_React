import React from 'react'
import Hero from './home/Hero'
import Featured from './home/Featured'
import Fruits from './home/Fruits'
import Vegetables from './home/Vegetables'

import Fact from './home/Fact'
import Testimonial from './testimonial/Testimonial'

const Home = () => {
    return (
        <>
            <Hero />
            <Featured />
            <Fruits />
            <Vegetables />
            <Fact />
            <Testimonial />
        </>
    )
}

export default Home
