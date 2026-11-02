import { NavLink } from "react-router-dom"
import dummyData from "../../../dummy/data"
import Img from "../../../ui/Img"
import { FaRegHeart } from "react-icons/fa";
import { FaCodeCompare } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";

const BestSeller = function(){

    return(
<section className="my-25">
    <div className="container">
        <div className="flex flex-col items-start gap-12">
            <h2 className="text-black1 text-4xl font-bold capitalize">our bestsellers</h2>
                <div className="flex items-center gap-10">
                {
                dummyData.bestSeller.map(function(item, index){
                    return(
                            <NavLink key={index} to={item.url}>
                            <div className="group flex flex-col items-start gap-3 relative">
                            <Img src={item.img} alt='pic'></Img>
                            <h3 className="text-black1 text-xl font-bold capitalize">{item.label}</h3>
                            <p className="text-grey1 capitalize">{item.color}</p>
                            <div className="absolute top-96 left-0 z-10 bg-white p-5 w-full flex flex-col items-end gap-4 trans opacity-0 group-hover:opacity-100 group-hover:top-[45%]">
                                <div className="flex items-center gap-2.5">
                                    <span className="text-grey1 font-semibold capitalize trans hover:text-red-600">add to wishlist</span>
                                    <FaRegHeart/>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <span className="text-grey1  font-semibold capitalize trans hover:text-red-600">compare</span>
                                    <FaCodeCompare/>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <span className="text-grey1  font-semibold capitalize trans hover:text-red-600">add to cart</span>
                                    <FaShoppingCart/>
                                </div>
                            </div>            
                            </div>
                            </NavLink>
                            )
                        })
                }
                </div>
            </div>
    </div>
</section>
    )
}

export default BestSeller