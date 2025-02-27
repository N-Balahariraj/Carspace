import React from 'react'
import Greetings from './Greetings'
import Explore from './Explore'
import Cars from './Cars'
import Contact from './Contact'
import Testimonials from './Testimonials'
import FAQs from './FAQs'

export default function Home() {
    return (
        <>
            {/* <Greetings/> */}
            <Explore />
            <Cars />
            {/* <Testimonials/> */}
            <Contact />
            {/* <FAQs/> */}
        </>
    )
}
