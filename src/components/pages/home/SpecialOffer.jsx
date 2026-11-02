import dummyData from "../../../dummy/data"
import ProductCard from "../../common/ProductCard"

const SpecialOffer = function(){

return(
    <section className="my-25">
        <div className="container">
            <div className="flex flex-col items-start gap-12">
                <h2 className="text-black1 text-4xl font-bold capitalize">special offer</h2>
                    <div className="flex items-center gap-10">
                    {
                    dummyData.specialOffer.map(function(item){
                        return(
                                <ProductCard key={item.id} item={item}/>
                            )
                            })
                    }
                    </div>
            </div>
        </div>
    </section>
    )
}

export default SpecialOffer