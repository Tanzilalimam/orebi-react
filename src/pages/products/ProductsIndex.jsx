import { useState } from "react"
import Shelf from "../../components/pages/products/Shelf"
import Specification from "../../components/pages/products/Specification"
import Details from "../../components/pages/products/Details"
import Description from "../../components/pages/products/Description"
import Review from "../../components/pages/products/Review"

const ProductIndex = function(){
let [activateTab, setActivateTab] = useState('description');
// description-
function hnDes(){
    setActivateTab('description');
}
// review-
function hnRev(){
    setActivateTab('review');
}
    return(
        <>
        <Shelf></Shelf>
        <Specification></Specification>
        <Details></Details>
        <div className="my-20 container">
        <div className="flex items-center gap-10">
            {/* tab navigation */}

            {/* description */}
            <h3 className={` p-3 text-grey2 text-lg font-semibold capitalize cursor-pointer ${activateTab==='description'? 'text-black1 border-b': 'text-grey1'}`} onClick={hnDes}>description</h3>

            {/* review */}
            <h3 className={`p-3 text-grey2 text-lg font-semibold capitalize cursor-pointer ${activateTab==='review'? 'text-black1 border-b': 'text-grey1'}`} onClick={hnRev}>reviews</h3>
            </div>

            {/* tab content */}

            {activateTab==='description'&&
            <Description></Description>
            }
            {activateTab==='review'&&
            <Review></Review>
            }
        </div>
        </>
    )
}

export default ProductIndex