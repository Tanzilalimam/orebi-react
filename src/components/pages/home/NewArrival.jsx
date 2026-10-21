// import SliderComponent from "react-slick"
// const Slider = SliderComponent.default || SliderComponent;
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { NavLink } from "react-router-dom"
// import dummyData from "../../../dummy/data"
// import Img from "../../../ui/Img"

// function SampleNextArrow(props) {

//     const { className, style, onClick } = props;

//     return (
//         <div
//             className={className}
//             style={{
//                 ...style,
//                 display: "block",
//                 background: "red",
//             }}
//             onClick={onClick}
//         />
//     );
// }


// function SamplePrevArrow(props) {

//     const { className, style, onClick } = props;

//     return (
//         <div
//             className={className}
//             style={{
//                 ...style,
//                 display: "block",
//                 background: "green",
//             }}
//             onClick={onClick}
//         />
//     );
// }

// const NewArrival = function () {

//     const settings = {
//         dots: true,
//         infinite: true,
//         slidesToShow: 3,
//         slidesToScroll: 1,

//         nextArrow: <SampleNextArrow />,
//         prevArrow: <SamplePrevArrow />,
//     };

//     return(
//         <section className="my-25">
//             <div className="container">
//                 <div className="flex flex-col items-start gap-12">
//                     <h2 className="text-black1 text-4xl font-bold capitalize">new arrival</h2>
//                     <div className="flex items-center gap-10">
//                     <Slider {...settings}>
//                         {
//                             dummyData.newArrivals.map(function(item, index){
//                                 return(
//                                     <NavLink key={index} to={item.url}>
//                                      <div className="flex flex-col items-start gap-3">
//                                         <Img src={item.img} alt='pic'></Img>
//                                         <h3 className="text-black1 text-xl font-bold capitalize">{item.label}</h3>
//                                         <p className="text-grey1 capitalize">{item.color}</p>
//                                     </div>
//                                     </NavLink>
//                                 )
//                             })
//                         }
//                     </Slider>                        
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default NewArrival



import SliderComponent from "react-slick";
const Slider = SliderComponent.default || SliderComponent;

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { NavLink } from "react-router-dom";
import dummyData from "../../../dummy/data";
import Img from "../../../ui/Img";


function SampleNextArrow(props) {

    const { className, style, onClick } = props;

    return (
        <div
            className={className}
            style={{
                ...style,
                display: "block",
                background: "red",
            }}
            onClick={onClick}
        />
    );
}


function SamplePrevArrow(props) {

    const { className, style, onClick } = props;

    return (
        <div
            className={className}
            style={{
                ...style,
                display: "block",
                background: "green",
            }}
            onClick={onClick}
        />
    );
}


const NewArrival = function () {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,

        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };


    return (
        <section className="my-25">

            <div className="container">

                <div className="flex flex-col items-start gap-12">

                    <h2 className="text-black1 text-4xl font-bold capitalize">
                        new arrival
                    </h2>


                    <div className="w-full">

                        <Slider {...settings}>

                            {
                                dummyData.newArrivals.map(function (item) {

                                    return (

                                        <NavLink
                                            key={item.id}
                                            to={item.url}
                                        >

                                            <div className="px-3">

                                                <div className="flex flex-col items-start gap-3">

                                                    <Img
                                                        src={item.img}
                                                        alt="pic"
                                                    />

                                                    <h3 className="text-black1 text-xl font-bold capitalize">
                                                        {item.label}
                                                    </h3>

                                                    <p className="text-grey1 capitalize">
                                                        {item.color}
                                                    </p>

                                                </div>

                                            </div>

                                        </NavLink>

                                    );

                                })
                            }

                        </Slider>

                    </div>

                </div>

            </div>

        </section>
    );
};


export default NewArrival;