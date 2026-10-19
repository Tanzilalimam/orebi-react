import BreadCrumb from "../../common/BreadCrumb"
import dummyData from "../../../dummy/data"
import Para from "../../../ui/Para"
import Img from "../../../ui/Img"
import Btn from "../../../ui/Btn"
import { NavLink } from "react-router-dom"

const Cart = function(){

    return(
        <section className="my-31">
            <div className="container">
                <BreadCrumb text={'cart'} roottext={'home'}></BreadCrumb>
                <div className="mt-34 flex flex-col items-start">
                    <div className="py-8 px-5 w-full bg-white1 text-black1 grid grid-cols-4 gap-25">
                        <Para text={'product'}></Para>
                        <Para text={'price'}></Para>
                        <Para text={'quantity'}></Para>
                        <Para text={'total'}></Para>
                    </div>
                    <ul className="py-8 px-5 w-full text-black1 flex items-center gap-100 border border-white2">
                    {
                        dummyData.cartProducts.map(function(item, index){
                            return(                                
                                <li key={index} className="w-315 bg-amber-300 py-6 px-6 flex items-center gap-100 border-b border-white2">
                                <div className=" w-full flex justify-around items-center gap-25">
                                <div className="flex items-center gap-10">
                                <Img src={item.img} alt='product' className='w-25 h-25 object-cover' />
                                <Para text={item.label}></Para>
                                </div>
                                <Para text={`${item.price}`}></Para>
                                <Para text={`${item.quantity}`}></Para>
                                <Para text={`${item.total}`}></Para>
                                </div>
                                </li>
                            )
                        })
                    }
                    </ul>
                    <div className="py-8 px-5 w-full text-black1 flex justify-between items-center border border-white2">
                        <div className="flex items-center gap-6.5">
                        <select name="" className="py-2.5 px-5 w-63.75 text-grey1 border border-white3 uppercase">
                            <option value="" className="py-2.5 px-5 text-grey1 uppercase">size</option>
                        </select>
                        <Para className='text-sm font-bold lowercase' text={'apply coupon'}></Para>
                        </div>
                        <Para className={'text-black1 font-bold text-sm'} text={'update cart'}></Para>
                    </div>
                    <div className="py-8 px-5 text-black1 font-bold self-end capitalize">cart totals</div>
                    <div className="py-8 px-5 text-black1 font-bold self-end capitalize">
                        <div className="py-5 px-5 flex items-center gap-40 border border-white2">
                            <Para text={'subtotal'}></Para>
                            <Para text={`$ 81918`}></Para>
                        </div>
                        <div className="py-5 px-5 flex items-center gap-40 border border-white2">
                            <Para text={'total'}></Para>
                            <Para text={`$ 81918`}></Para>
                        </div>
                        <NavLink to={'/'}>
                        <Btn className="my-7.5 ml-10 hover:bg-black hover:text-white" text={'proceed to checkout'}></Btn>
                        </NavLink>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cart