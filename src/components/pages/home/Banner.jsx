import { useState } from "react";
// import Slider from "react-slick";
import SliderComponent from "react-slick"
const Slider = SliderComponent.default || SliderComponent;
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dummyData from '../../../dummy/data'
import Img from '../../../ui/Img'
import Btn from "../../../ui/Btn"


const Banner = function(){
let [dotActive, setDotActive] = useState(0);

 let settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: function(current, next){
        setDotActive(next);
    },
    appendDots: dots => (
      <div
        style={{    
            width: '0px',
            backgroundColor: "#ddd",
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            gap: '30px',
            position: "absolute",
            top: '40%',
            left: "5%",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
     customPaging: i => (
      <div
        style={
            i === dotActive
            ?
            {
                paddingRight: '10px',
                width: "30px",
                color: "#262626",
                borderRight: "5px solid #262626",
            }
            :
            {
                paddingRight: '10px',
                width: "30px",
                color: "transparent",
                borderRight: "5px solid #f5f5f3",
            }
        }
      >
        0{i + 1}
      </div>
    ),
  };

    return(
        <>
        <section className="py-12 bg-white2">
            <div className="container">
            <div className=" relative">
            <Slider {...settings}>
                {
                dummyData.banner.map(function(item, index){
                    return(
                    <div key={index} className="banner-content">
                        <div className="flex flex-col items-start gap-7.5">
                            <h1 className="text-black1 text-5xl font-bold capitalize">{item.h1}</h1>
                            <div className="text-grey3"> {item.span1} <span className="text-black1 text-[40px] font-bold"> {item.span2} </span> {item.txt}
                            </div>
                            <Btn className="hover:bg-black hover:text-white" text={'shop now'}></Btn>
                        </div>
                        <div>
                            <Img src={item.img} alt={item.title} className={`w-110`}></Img>
                        </div>
                    </div>
                    )
                    })
                }
            </Slider>
            </div>
            </div>
        </section>
                <div className='mb-10 py-5.5 px-39.75 bg-white border-b border-b-white1 flex justify-between items-center'>
                    <div>2 years waranty</div>
                    <div>2 years waranty</div>
                    <div>2 years waranty</div>
                </div>
        </>
    )
}

export default Banner