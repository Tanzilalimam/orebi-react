import { FaTruck } from "react-icons/fa";
import { IoReloadOutline } from "react-icons/io5";
import Para from "../../../ui/Para";

const Servcie = function(){

    return(
        <section className="mb-10 border-b border-b-white1">
            <div className="container">
                <div className='py-5.5 px-39.75 flex justify-between items-center'>
                    <div> <span className="text-xl font-bold">2</span> Years Waranty</div>
                    <div className="flex items-center gap-3">
                        <FaTruck className="text-xl"/>
                        <Para className='' text={'free shipping'}></Para>
                    </div>
                    <div className="flex items-center gap-3">
                        <IoReloadOutline className="text-xl"/>
                        <Para className='' text={'return policy'}></Para>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Servcie