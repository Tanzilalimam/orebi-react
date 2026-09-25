
const Para = function({className, text}){

    return(
        <>
        <p className={`${className} text-lg font-medium capitalize`}>{text}</p>
        </>
    )
}

export default Para