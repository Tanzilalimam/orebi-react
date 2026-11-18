import BreadCrumb from "../../common/BreadCrumb"
import Btn from "../../../ui/Btn";

const Checkout = function(){
function handleCoupon(){
    console.log('ok');
}
    return(
        <section className="my-15">
            <div className="container">
                <div className="flex flex-col items-start gap-30">
                        <BreadCrumb text={'checkout'} roottext={'home'}></BreadCrumb>
                        <div className="flex flex-col items-start gap-3">
                        <span className="text-grey1 text-sm">Have a Coupon?</span>
                        <div className="flex items-center gap-4">
                        <input type="text" name="coupon" className="py-3 border-b border-b-black/20 outline-0" placeholder="enter your coupon" />
                        <div className="py-3 w-12.5 text-grey1 text-center border-b border-b-black/20 capitalize cursor-pointer" onClick={handleCoupon}>ok</div>
                        </div>
                    </div>
                    <div className="w-[40%] flex flex-col items-start gap-6">
                        <h3 className="text-black1 text-4xl font-bold capitalize">billing details</h3>
                        <input type="text" name="fname" className="py-3 w-full text-grey1 text-sm border-b border-b-black/20 outline-0" placeholder="first name *" />
                        <input type="text" name="lname" className="py-3 w-full text-grey1 text-sm border-b border-b-black/20 outline-0" placeholder="last name *" />
                        <input type="text" name="cpny" className="py-3 w-full text-grey1 text-sm border-b border-b-black/20 outline-0" placeholder="company name (optional)" />
                        <select name="" className="py-3 w-full text-grey1 text-sm border-b border-b-black/20 outline-0">
                        <option value="">select</option>
                        <option value="" className="capitalize">japan</option>
                        <option value="">saudi arab</option>
                        </select>
                        <input type="text" name="city" className="py-3 w-full text-grey1 text-sm border-b border-b-black/20 outline-0" placeholder="town/city *" />
                        <input type="text" name="post" className="py-3 w-full text-grey1 text-sm border-b border-b-black/20 outline-0" placeholder="postal code *" />
                        <input type="text" name="phone" className="py-3 w-full text-grey1 text-sm border-b border-b-black/20 outline-0" placeholder="phone *" />
                        <input type="email" name="email" className="py-3 w-full text-grey1 text-sm border-b border-b-black/20 outline-0" placeholder="email *" />
                    </div>
                    <div className="w-[40%] flex flex-col items-start gap-6">
                        <h3 className="text-black1 text-4xl font-bold capitalize">additional details</h3>
                        <input type="text" name="fname" className="py-3 w-full text-grey1 text-sm border-b border-b-black/20 outline-0" placeholder="other notes (optional)" />
                    </div>
                    <div className="w-[40%] flex flex-col items-start gap-6">
                        <h3 className="text-black1 text-4xl font-bold capitalize">your order</h3>
                        <div className="w-full flex justify-between items-center">
                            <ul className="pl-5 w-[50%] flex flex-col gap-3">
                               <h4 className="py-3 w-full text-grey2 font-bold border-b border-b-grey2 capitalize">product</h4> 
                               {
                                [0,1,2].map((index)=>{
                                    return(
                                        <li key={index} className="py-3 w-full text-grey2 border-b border-b-grey2">one</li> 
                                    )
                                })
                               }
                            </ul>
                            <ul className=" pl-5 w-[50%] flex flex-col gap-3">
                                <h4 className="py-3 w-full text-grey2 font-bold border-b border-b-grey2 capitalize">total</h4>
                                {
                                [0,1,2].map((index)=>{
                                    return(
                                        <li key={index} className="py-3 w-full text-grey2 border-b border-b-grey2">two</li> 
                                    )
                                })
                               }
                            </ul>
                        </div>
                    </div>
                    <div className="w-[40%] flex flex-col items-start gap-6">
                        <div className="flex items-center gap-2">
                        <input type="radio" name="rad" id="" />
                        <span className="font-semibold capitalize">bank</span>
                        </div>
                        <div className="flex items-center gap-2">
                        <input type="radio" name="rad" id="" />
                        <span className="font-semibold capitalize">online</span>
                        </div>
                    </div>
                    <Btn className='hover:bg-black1 hover:text-white' text='proceed to pay'></Btn>
                </div>
            </div>
        </section>
    )
}

export default Checkout