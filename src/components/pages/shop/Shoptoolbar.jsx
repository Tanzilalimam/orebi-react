import { CiGrid42 } from "react-icons/ci";
import { FaList } from "react-icons/fa";
import ShopProducts from "./ShopProducts"

const Shoptoolbar = function(){

    return(
        <>
        <div className="my-6 flex flex-col items-start gap-10">
        <div className="w-full flex justify-end items-center gap-20">
            <div className=" self-start">
                <div><CiGrid42 /></div>
                <div><FaList /></div>
            </div>
            <div className="flex items-center gap-6">
                <span className="text-grey1 font-semibold capitalize">sort by:</span>
                <select name="" className="py-2 px-6 bg-black/10 text-grey1 capitalize">
                    <option value="" className="text-grey1 capitalize">featured</option>
                    <option value="" className="text-grey1 capitalize">price: low to high</option>
                    <option value="" className="text-grey1 capitalize">price high to low</option>
                </select>
            </div>
            <div className="flex items-center gap-6">
                <span className="text-grey1 font-semibold capitalize">show:</span>
                <select name="" className="py-2 px-6 bg-black/10 text-grey1 capitalize">
                    {
                        [0,1,2,3].map((index)=>{
                            return(
                                <option key={index} value="" className="text-grey1 capitalize">10</option>
                            )
                        })
                    }
                </select>
            </div>
        </div>
        <div>
        <ShopProducts></ShopProducts>
        </div>
        </div>
        </>
    )
}

export default Shoptoolbar