import { IoMdAdd } from "react-icons/io";
import { IoMdRemove } from "react-icons/io";
import Para from "../../../ui/Para";
import { useState } from "react";

const Details = function(){
let [show, setShow] = useState(null);
// function handleShow(){
//     console.log('clicked');
//     setShow(prev => !prev);
// }
    return(
        <section className="my-5">
            <div className="container">
                <div className="w-[45%]">
                        <div className="py-5 w-full flex flex-col gap-4 border-b border-b-black/20">
                            <div className="flex justify-between items-center gap-5">
                                <span className="text-lg font-bold uppercase">features & details </span>
                                {show ?
                                    <IoMdRemove className="text-xl cursor-pointer" onClick={
                                        ()=> setShow(show===1 ? null : 1 )
                                    } />
                                    :
                                    <IoMdAdd className="text-xl cursor-pointer" onClick={
                                        ()=> setShow(show===1 ? null : 1 )
                                    } />
                                }
                            </div>
                            {show=== 1 &&(
                                <Para className={`text-grey2`} text={`some crazy work happening in figmaa`}></Para>
                                )
                            }
                        </div>
                        <div className="py-5 w-full flex flex-col gap-4 border-b border-b-black/20">
                            <div className="flex justify-between items-center gap-5">
                                <span className="text-lg font-bold uppercase">
                                description & details 
                                {/* {show ? <IoMdRemove/> : <IoMdAdd/>} */}
                                </span>
                                {show ?
                                    <IoMdRemove className="text-xl cursor-pointer" onClick={
                                        ()=> setShow(show === 2 ? null : 2)
                                    } />
                                    :
                                    <IoMdAdd className="text-xl cursor-pointer" onClick={
                                        ()=> setShow(show === 2 ? null : 2)
                                    } />
                                }
                            </div>
                            {show=== 2 &&(
                                <Para className={`text-grey2`} text={`some crazy work happening in figmaa`}></Para>
                                )
                            }
                        </div>
                        <div className="py-5 w-full flex flex-col gap-4 border-b border-b-black/20">
                            <div className="flex justify-between items-center gap-5">
                                <span className="text-lg font-bold uppercase">shipping & returns </span>
                                {show ?
                                    <IoMdRemove className="text-xl cursor-pointer" onClick={
                                        ()=> setShow((show === 3 ? null : 3))
                                    } />
                                    :
                                    <IoMdAdd className="text-xl cursor-pointer" onClick={
                                        ()=> setShow((show === 3 ? null : 3))
                                    } />
                                }
                            </div>
                            {show===3 &&(
                                <Para className={`text-grey2`} text={`some crazy work happening in figmaa`}></Para>
                                )
                            }
                        </div>
                </div>
            </div>
        </section>
    )
}

export default Details