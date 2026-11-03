import Para from "../../../ui/Para"
import Star from "../../common/Star"

const Specification = function(){

    return(
        <section className="my-15">
            <div className="container">
                <div className="w-[45%] flex flex-col items-start gap-5">
                    <h2 className="text-black1 text-4xl font-bold capitalize">product</h2>
                    <div className="pb-5 w-full flex flex-col gap-4 border-b border-b-black/20">
                    <div className="flex items-center gap-5">
                        <Star></Star>
                        <span className="text-grey2 text-lg">1 review</span>
                    </div>
                        <div className="flex items-center gap-5">
                        <strike className='text-red-600 text-lg'>$88.00</strike>
                        <span className='text-black1 text-lg font-bold'>$44.00</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Specification