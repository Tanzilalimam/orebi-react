import { NavLink } from "react-router-dom"
import dummyData from "../../../dummy/data"
import Img from "../../../ui/Img"

const SpecialOffer = function(){

    return(
<section className="my-25">
    <div className="container">
        <div className="flex flex-col items-start gap-12">
            <h2 className="text-black1 text-4xl font-bold capitalize">special offer</h2>
                <div className="flex items-center gap-10">
                {
                dummyData.specialOffer.map(function(item, index){
                    return(
                            <NavLink key={index} to={item.url}>
                            <div className="flex flex-col items-start gap-3">
                            <Img src={item.img} alt='pic'></Img>
                            <h3 className="text-black1 text-xl font-bold capitalize">{item.label}</h3>
                            <p className="text-grey1 capitalize">{item.color}</p>
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

export default SpecialOffer