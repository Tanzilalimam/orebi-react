import dummyData from "../../../dummy/data"

const Review = function(){

    return(
        <section className="my-0">
            <div className="mt-5 p-3">
                <span className="text-grey2 text-sm">
                {dummyData.reviews.length} reviews for product
                </span>
                <div className="my-10 flex flex-col items-start gap-5">
                {
                    dummyData.reviews.map((item)=>{
                        return(
                        <div key={item.id} className="flex flex-col items-start gap-1">
                            <div className="text-black1 capitalize">{item.name}</div>
                            <div className="pl-2 text-grey2 text-sm">- {item.mess}</div>
                        </div>
                        )
                    })
                }
                </div>
            </div>
        </section>
    )
}

export default Review