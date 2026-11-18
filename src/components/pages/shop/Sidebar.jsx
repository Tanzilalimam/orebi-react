
const Sidebar = function(){

    return(
        <>
        <ul className="my-10">
        <h4 className="py-3 text-black1 font-bold capitalize">shop by category</h4>
        {
        [0,1,2,3,4].map((index)=>{
            return(
                <li key={index} className="py-3 text-grey1 border-b border-b-black/20 capitalize cursor-pointer">category 1</li>
            )
        })
        }
        </ul>
        <ul className="my-10">
        <h4 className="py-3 text-black1 font-bold capitalize">shop by color</h4>
        {
        [0,1,2,3,4].map((index)=>{
            return(
                <li key={index} className="py-3 text-grey1 border-b border-b-black/20 capitalize cursor-pointer">color 1</li>
            )
        })
        }
        </ul>
        <ul className="my-10">
        <h4 className="py-3 text-black1 font-bold capitalize">shop by brand</h4>
        {
        [0,1,2,3,4].map((index)=>{
            return(
                <li key={index} className="py-3 text-grey1 border-b border-b-black/20 capitalize cursor-pointer">brand 1</li>
            )
        })
        }
        </ul>
        <ul className="my-10">
        <h4 className="py-3 text-black1 font-bold capitalize">shop by price</h4>
        {
        [0,1,2,3,4].map((index)=>{
            return(
                <li key={index} className="py-3 text-grey1 border-b border-b-black/20 capitalize cursor-pointer">price 1</li>
            )
        })
        }
        </ul>
        </>
    )
}

export default Sidebar