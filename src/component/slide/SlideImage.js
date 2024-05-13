import React, { useCallback, useRef } from "react";
import Slider from "react-slick";
import { IoIosArrowDropleftCircle,IoIosArrowDroprightCircle } from "react-icons/io";
function SlideImage({images}){
    const slickRef = useRef(null);

    const previous = useCallback(() => slickRef.current.slickPrev(), []);
    const next = useCallback(() => slickRef.current.slickNext(), []);

    const settings = {
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    const SlideWithArrows = ({ imgSrc, altText }) => (
        <div className="relative">
          <img src={imgSrc} alt={altText} className="w-full" />
        
            <div onClick={previous} className="absolute top-1/2 left-1">
                <IoIosArrowDropleftCircle size="25" color="white"/>
            </div>
            <div onClick={next} className="absolute top-1/2 right-1">
                <IoIosArrowDroprightCircle size="25" color="white"/>
            </div>

        </div>
    )
    return(
        <div className="w-full">
            <div>
                <Slider {...settings} ref={slickRef}>
                    {images.map((image,idx) =>{
                        return(
                            <SlideWithArrows key={idx} imgSrc={image}/>
                        )
                    })}
                </Slider>
            </div>

        </div>
    )
}

export default SlideImage;