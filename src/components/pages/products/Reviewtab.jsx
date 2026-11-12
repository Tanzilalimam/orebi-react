import { useState } from "react"
import dummyData from "../../../dummy/data";
import Description from "./Description";
import Review from "./Review";

const Reviewtab = function(){
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
        <section className="my-20">
            <div className="container">
                <div className="flex items-center gap-10">
            {/* tab navigation */}

            {/* description */}
            <h3 className={` p-3 text-grey2 font-semibold capitalize cursor-pointer ${activateTab==='description'? 'text-black1 border-b': 'text-grey1'}`} onClick={hnDes}>description</h3>

            {/* review */}
            <h3 className={`p-3 text-grey2 font-semibold capitalize cursor-pointer ${activateTab==='review'? 'text-black1 border-b': 'text-grey1'}`} onClick={hnRev}>
                reviews ({dummyData.reviews.length})
            </h3>
            </div>

            {/* tab content */}

            {activateTab==='description'&&
            <Description></Description>
            }
            {activateTab==='review'&&
            <Review></Review>
            }
            </div>
        </section>
    )
}

export default Reviewtab