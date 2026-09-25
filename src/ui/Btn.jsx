
const Btn = function({className="", text, onclick}){

    return(
    <button className={`${className} py-1.5 px-6 text-xl font-semibold border-0 rounded-lg capitalize cursor-pointer trans`} onClick={onclick}>{text}</button>
    )
}

export default Btn