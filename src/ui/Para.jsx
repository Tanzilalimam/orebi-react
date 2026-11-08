
const Para = function({className, text}){

    return(
        <>
        <p className={`${className} text-md font-medium`}>{text}</p>
        </>
    )
}

export default Para