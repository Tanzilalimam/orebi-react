import { useState } from "react";
import Para from "../../ui/Para";
import { TbMenu3 } from "react-icons/tb";
import { FaSearch } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { MdLogin } from "react-icons/md";
import { NavLink } from "react-router-dom";
import dummyData from "../../dummy/data";

const Cate = function(){
// category-
let [show, setShow] = useState(false);
function handleShow(){
    setShow(!show);
}

// profile-
let [down, setDown] = useState(false);
function handleDown(){
    setDown(!down);
}

// login-
let [logged, setLogged] = useState(true);

    return(
        <section className="py-8 bg-white1">
            <div className="container">
                <div className="flex justify-between items-center">
                    <div className="flex flex-col items-start gap-3 relative">
                    <div className="flex gap-4">
                        <div>
                        <TbMenu3 className="text-2xl cursor-pointer" onClick={handleShow}/>
                        </div>
                        <Para className='text-black1' text='shop by category'></Para>
                    </div>
                    <ul className="my-2 absolute left-0 top-full">
                        {show &&
                        dummyData.cateData.category.map(function(item, index){
                            return(
                        <li key={index} className="border-b-2 border-b-grey1">
                            <NavLink to={item.url}>
                            <Para className='py-3 px-6 bg-white text-black1 capitalize' text={item.label}></Para>
                            </NavLink>
                        </li>
                            )
                        })
                        }
                    </ul>
                    </div>
                    <div className="relative">
                        <input type="text" className="py-4 px-5 w-150 bg-white capitalize outline-0" placeholder="search products" />
                        <FaSearch className="text-xl absolute right-4.25 top-4.25"/>
                    </div>
                    <div className="flex gap-6 relative">
                    {logged ?
                        <div className="flex gap-.5  cursor-pointer" onClick={handleDown}>
                        <IoPersonSharp className="text-xl"/>
                        <FaCaretDown className="text-xl"/>
                        <ul className="my-2 absolute -left-9 top-full">
                            {down &&
                            dummyData.cateData.profile.map(function(item, index){
                            return(
                            <li key={index} className="border-b-2 border-b-grey1">
                            <NavLink to={item.url}>
                            <Para className='py-3 px-6 bg-white text-black1 capitalize' text={item.label}></Para>
                            </NavLink>
                            </li>
                            )
                                })
                            }
                        </ul>
                        </div>
                        :
                        <NavLink to={'/login'}>
                            <MdLogin className="text-xl"/>
                        </NavLink>
                        }
                        <FaCartShopping className="text-xl"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cate