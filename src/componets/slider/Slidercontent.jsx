import React from 'react'

const Slidercontent = ({activeIndex,imageSlider}) => {
  return (
    <>
    <section>
        {imageSlider.map((slide,index)=>
        <div key={index} className={index=== activeIndex ? "slides active":"inactive"} >
            <img src={slide.urls} alt="" className="slide-image" />
            
        </div>
        )}
    </section>
      
    </>
  )
}

export default Slidercontent;
