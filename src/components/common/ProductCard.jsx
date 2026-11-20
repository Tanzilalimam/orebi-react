import { NavLink } from "react-router-dom"
import Img from "../../ui/Img";
import { FaRegHeart } from "react-icons/fa";
import { FaCodeCompare } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";

const ProductCard = function({item, view}){

    return(
        <>
        <NavLink to={item.url}>
        <div className={`group w-full flex relative ${view==='grid' ? 'flex-col items-start gap-3' : 'flex-row items-center gap-10'}`}>
            <Img src={item.img} alt={item.label} className={view==='grid' ? 'w-fulll aspect-square object-contain' : 'w-40 aspect-square object-contain'}></Img>
            <div className="pr-5 w-full flex justify-between items-center gap-5">
            <h3 className="text-black1 text-xl font-bold capitalize">{item.label}</h3>
            <span className="text-grey1 font-bold">${item.price}</span>
            </div>
            <p className="text-grey1 capitalize">{item.color}</p>
    {/* hover card */}
        <div className={view==='grid' ? `absolute top-96 left-0 z-10 bg-white p-5 w-full flex flex-col items-end gap-4 trans opacity-0  cursor-pointer group-hover:opacity-100 group-hover:top-[40%]`: `p-5 w-full flex flex-col gap-4`}>
            <div className={view==='grid' ? `flex items-center gap-2.5` : `flex justify-between`}>
                <span className="text-grey1 font-semibold capitalize trans hover:text-red-600">add to wishlist</span>
                <FaRegHeart/>
            </div>
            <div className={view==='grid' ? `flex items-center gap-2.5` : `flex justify-between`}>
                <span className="text-grey1  font-semibold capitalize trans hover:text-red-600">compare</span>
                <FaCodeCompare/>
            </div>
            <div className={view==='grid' ? `flex items-center gap-2.5` : `flex justify-between`}>
                <span className="text-grey1  font-semibold capitalize trans hover:text-red-600">add to cart</span>
                <FaShoppingCart/>
            </div>
        </div>
        </div>
        </NavLink>                    
        </>
    )
}

export default ProductCard