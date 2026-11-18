import dummyData from "../../../dummy/data"
import ProductCard from "../../common/ProductCard"

const ShopProducts = function(){

    return(
        <>
        <div className="flex flex-col items-start gap-15">
            <div className="flex items-center gap-10">
            {
            dummyData.bestSeller.map(function(item){
                return(
                        <ProductCard key={item.id} item={item} />
                        )
                    })
            }
            </div>
            <div className="flex items-center gap-10">
            {
            dummyData.newArrivals.map(function(item){
                return(
                        <ProductCard key={item.id} item={item} />
                        )
                    })
            }
            </div>
            <div className="flex items-center gap-10">
            {
            dummyData.newArrivals.map(function(item){
                return(
                        <ProductCard key={item.id} item={item} />
                        )
                    })
            }
            </div>
            <div className="flex items-center gap-10">
            {
            dummyData.newArrivals.map(function(item){
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