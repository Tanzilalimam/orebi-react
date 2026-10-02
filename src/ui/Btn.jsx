
const Btn = function({className="", text, onclick}){

    return(
    <button className={`${className} py-4 px-19.25 text-sm font-bold border border-black1 rounded-0 capitalize cursor-pointer trans`} onClick={onclick}>{text}</button>
    )
}

export default Btn