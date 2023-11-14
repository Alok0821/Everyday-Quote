import React, { useState, useEffect } from 'react'
import Slidercontent from './Slidercontent'
import imageSlider from "./Imageslider"
import Arrow from './Arrow'
import Dots from './Dots'
import "./slider.css"


const len = imageSlider.length - 1;

const Slider = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => { setActiveIndex(activeIndex === len ? 0 : activeIndex + 1) }, 5000)
        return () => clearInterval(interval)
    }, [activeIndex]);

    return (
        <>
            <div className="slider-container">
                <Slidercontent activeIndex={activeIndex} imageSlider={imageSlider} />
                <Arrow prevSlide={() => setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)}
                    nextSlide={() => setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)} />
                <Dots activeIndex={activeIndex} imageSlider={imageSlider} onclick={activeIndex => setActiveIndex(activeIndex)} />
            </div>

        </>
    )
}

export default Slider
