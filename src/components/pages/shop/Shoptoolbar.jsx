import ShopProducts from "./ShopProducts"

const Shoptoolbar = function(){

    return(
        <>
        <div className="my-13 flex flex-col items-start gap-10">
        <div className="w-full flex justify-end items-center gap-20">
            <div className="flex items-center gap-6">
                <span className="text-grey1 font-semibold capitalize">sort by:</span>
                <select name="" className="text-grey1 capitalize">
                    <option value="" className="text-grey1 capitalize">featured</option>
                    <option value="" className="text-grey1 capitalize">cultured</option>
                </select>
            </div>
            <div className="flex items-center gap-6">
                <span className="text-grey1 font-semibold capitalize">show:</span>
                <select name="" className="text-grey1 capitalize">
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