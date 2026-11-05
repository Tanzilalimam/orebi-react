
const Btn = function({className="", text, onclick, disabled}){

    return(
    <button className={`${className} py-4 px-18 text-lg font-semibold border border-black1 rounded-0 capitalize cursor-pointer trans`} onClick={onclick} disabled={disabled}>{text}</button>
    )
}

export default Btn