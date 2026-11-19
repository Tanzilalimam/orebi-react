import dummyData from "../../../dummy/data"
import ProductCard from "../../common/ProductCard"

const ShopProducts = function({view, sortBy, showQuan}){

let products = [
    ...dummyData.newArrivals.map((item)=>{
        return{
            ...item,
            listingId: `arrival- ${item.id}`
        }
    }),

    ...dummyData.bestSeller.map((item)=>{
        return{
            ...item,
            listingId: `best- ${item.id}`
        }
    }),

    ...dummyData.specialOffer.map((item)=>{
        return{
            ...item,
            listingId: `special- ${item.id}`
        }
    }),
    ...dummyData.combinedOffer.map((item)=>{
        return{
            ...item,
            listingId: `combinde- ${item.id}`
        }
    })
];

// sorting-
if(sortBy === 'name-asc'){
    products.sort((a,b)=>{
        return a.label.localeCompare(b.label);
    })
}

if(sortBy === 'name-desc'){
    products.sort((a,b)=>{
        return b.label.localeCompare(a.label);
    })
}

// limit products-
let visibleProducts = products.slice(0, showQuan);

    return(
        <>
        {/* <div className="flex flex-col items-start gap-18">
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
            </div> */}
            <div className={view==='grid' ? `w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5` : `w-full flex flex-col gap-8`}>
                {
                    visibleProducts.map((item)=>{
                        return(
                            <ProductCard 
                                key={item.listingId} item={item} view={view}
                            />
                        )
                    })
                }
            </div>
        </>
    )
}

export default ShopProducts