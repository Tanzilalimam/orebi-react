import { useEffect, useState } from "react"
import Btn from "../../../ui/Btn"
import Star from "../../common/Star"
import { GrPowerReset } from "react-icons/gr";
import { IoMdAdd } from "react-icons/io";

const Specification = function(){
let [show, setShow] = useState(0);

function incr(){
    setShow(function(prev){
    if(prev<20){
        return prev+1;
    }
    else{
        console.log(`can't order more than 20`);
        return prev;
    }
    })
}
function dcr(){
    setShow(function(prev){
    if(prev>0){
        return prev-1;
    }
    else{
        console.log(`can't order less than 1`);
        return prev;
    }
    })
}
function reset(){
    setShow(0);
}
useEffect(function(){
    console.log(show);
}, [show])

    return(
        <section className="my-15">
            <div className="container">
                <div className="w-[45%] flex flex-col items-start gap-5">
                    <h2 className="text-black1 text-4xl font-bold capitalize">product</h2>
                    <div className="py-5 w-full flex flex-col gap-4 border-b border-b-black/20">
                    <div className="flex items-center gap-5">
                        <Star></Star>
                        <span className="text-grey2 text-lg">1 review</span>
                    </div>
                        <div className="flex items-center gap-5">
                        <strike className='text-red-600 text-lg'>$88.00</strike>
                        <span className='text-black1 text-lg font-bold'>$44.00</span>
                        </div>
                    </div>
                    <div className="py-5 w-full flex flex-col gap-4 border-b border-b-black/20">
                    <div className="flex items-center gap-5">
                        <span className="text-lg font-bold capitalize">color: </span>
                        <Star></Star>
                    </div>
                        <div className="flex items-center gap-5">
                        <span className='text-lg font-bold capitalize'>size: </span>
                        <select className='text-black1 text-lg font-bold'>
                            <option value="">s</option>
                            <option value="">m</option>
                            <option value="">l</option>
                            <option value="">xl</option>
                            <option value="">xxl</option>
                            <option value="">free</option>
                        </select>
                        </div>
                        <div className="flex items-center gap-5">
                        <span className='text-lg font-bold capitalize'>quantity: </span>
                        <Btn text={`+`} className="bg-green-600 text-white disabled:bg-grey1 disabled:cursor-not-allowed" onclick={incr} disabled={show===20}></Btn>
                        <span className='text-black1 text-lg font-bold'>{show}</span>
                        <Btn text={`-`} className="bg-red-600 text-white text-2xl disabled:bg-grey1 disabled:cursor-not-allowed" onclick={dcr} disabled={show===0}></Btn>
                        <div className="py-4 px-10 hover:bg-blue-600 hover:text-white text-lg font-semibold border border-black trans cursor-pointer" onClick={reset}>
                        <GrPowerReset />
                        </div>
                        </div>
                    </div>
                    <div className="pb-5 w-full flex flex-col gap-0 border-b border-b-black/20">
                    <div className="flex items-center gap-5">
                        <span className="text-lg font-bold capitalize">status: </span>
                        <span className="text-lg capitalize">in stock</span>
                    </div>
                    </div>
                    <div className="pb-5 w-full flex flex-col gap-4 border-b border-b-black/20">
                    <div className="flex items-center gap-5">
                        <Btn className="hover:bg-black hover:text-white" text={`add to wish list`}></Btn>
                        <Btn className="hover:bg-black hover:text-white" text={`add to cart`}></Btn>
                    </div>
                    </div>
                    <div className="pb-5 w-full flex flex-col gap-4 border-b border-b-black/20">
                    <div className="flex justify-between items-center gap-5">
                        <span className="text-lg font-bold uppercase">features & details </span>
                        <IoMdAdd className="text-xl"/>
                    </div>
                    </div>
                    <div className="pb-5 w-full flex flex-col gap-4 border-b border-b-black/20">
                    <div className="flex justify-between items-center gap-5">
                        <span className="text-lg font-bold uppercase">features & details </span>
                        <IoMdAdd className="text-xl"/>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Specification