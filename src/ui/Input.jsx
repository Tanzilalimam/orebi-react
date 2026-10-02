
const Input = function({className='', type='', name='', placeholder='', onChange}){

    return(
        <input type={type} name={name} placeholder={placeholder} className={`${className} py-3 w-127 text-grey1 text-sm outline-0`} onChange={onChange} />
    )
}

export default Input