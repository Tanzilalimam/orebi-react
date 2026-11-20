import { useState } from "react";
import { BsFillGridFill } from "react-icons/bs";
import { FaList } from "react-icons/fa";
import ShopProducts from "./ShopProducts"

const Shoptoolbar = function(){
// 1. view mode- grid/list
const [view, setView] = useState('grid');

function handleGrid(){
    console.log('grid');
    setView('grid');
}
function handleList(){
    console.log('list');
    setView('list');
}

// 2. sorting- price
const [sortBy, setSortBy] = useState('featured');

function handleSort(e){
    console.log(e.target.value);
    console.log(setSortBy(e.target.value));
    setSortBy(e.target.value);
}

// 3. show product quantity
const [showQuan, setShowQuan] = useState(3);

function handleQuan(e){
    console.log(setShowQuan(Number(e.target.value)));
    setShowQuan(Number(e.target.value));
}

    return(
        <>
        <div className="my-6 flex flex-col items-start gap-10">
        <div className="w-full flex justify-between items-center gap-20">
            <div className="flex items-center gap-2 align-bottom">
                <div className={`p-2 text-2xl cursor-pointer ${view==='grid' ? "bg-black1 text-white" : "bg-transparent text-black1"}`} onClick={handleGrid}><BsFillGridFill /></div>
                <div className={`p-2 text-2xl cursor-pointer ${view==='list' ? "bg-black1 text-white" : "bg-transparent text-black1"}`} onClick={handleList}><FaList /></div>
            </div>
            <div className="flex items-center gap-15">
            <div className="flex items-center gap-6">
                <span className="text-grey1 font-semibold capitalize">sort by:</span>
                <select name="" className="py-2 px-6 bg-black/10 text-grey1 capitalize" value={sortBy} onChange={handleSort}>
                    <option value="featured" className="text-grey1 capitalize">featured</option>
                    <option value="price-low" className="text-grey1 capitalize">price: low to high</option>
                    <option value="price-high" className="text-grey1 capitalize">price high to low</option>
                </select>
            </div>
            <div className="flex items-center gap-6">
                <span className="text-grey1 font-semibold capitalize">show:</span>
                <select name="" className="py-2 px-6 bg-black/10 text-grey1 capitalize" onChange={handleQuan}>
                    {
                        [3,6,9,12].map((num)=>{
                            return(
                                <option key={num} value={num} className="text-grey1 capitalize">{num}</option>
                            )
                        })
                    }
                </select>
            </div>
            </div>
        </div>
        <div>
        <ShopProducts view={view} sortBy={sortBy} showQuan={showQuan}></ShopProducts>
        </div>
        </div>
        </>
    )
}

export default Shoptoolbar