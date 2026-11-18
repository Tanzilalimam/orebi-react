import BreadCrumb from "../../common/BreadCrumb"
import Sidebar from "./Sidebar"
import Shoptoolbar from "./Shoptoolbar"

const Shop = function(){

    return(
        <section className="my-15">
            <div className="container">
                <div className="flex flex-col items-start gap-20">
                    <BreadCrumb text='product' roottext='home'></BreadCrumb>
                    <div className="w-full flex justify-between items-start gap-20">
                        <div className='w-[23%]'><Sidebar></Sidebar></div>
                        <div className='w-[77%]'><Shoptoolbar></Shoptoolbar></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Shop