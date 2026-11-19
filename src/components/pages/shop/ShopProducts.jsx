import dummyData from "../../../dummy/data"
import ProductCard from "../../common/ProductCard"

const ShopProducts = function(){

    return(
        <>
        <div className="flex flex-col items-start gap-18">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {
            dummyData.bestSeller.slice(0,3).map(function(item){
                return(
                        <ProductCard key={item.id} item={item} />
                        )
                    })
            }
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {
            dummyData.newArrivals.slice(0,3).map(function(item){
                return(
                        <ProductCard key={item.id} item={item} />
                        )
                    })
            }
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {
            dummyData.specialOffer.slice(0,3).map(function(item){
                return(
                        <ProductCard key={item.id} item={item} />
                        )
                    })
            }
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {
            dummyData.combinedOffer.slice(0,3).map(function(item){
                return(
                        <ProductCard key={item.id} item={item} />
                        )
                    })
            }
            </div>
        </div>
        </>
    )
}

export default ShopProducts