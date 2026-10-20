// import Slider from "react-slick";
import SliderComponent from "react-slick"
const Slider = SliderComponent.default || SliderComponent;
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dummyData from '../../../dummy/data'
import Img from '../../../ui/Img'
import Btn from "../../../ui/Btn"


const Banner = function(){
 let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  console.log("Slider:", Slider);
console.log("Img:", Img);
console.log("Btn:", Btn);

    return(
        <>
        <section className="py-12 bg-white2">
            <div className="container">
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