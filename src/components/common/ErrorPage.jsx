import { NavLink } from "react-router-dom"

const ErrorPage = function(){

    return(
        <section>
            <div className="container">
                <div className="h-screen flex flex-col items-center justify-center gap-4">
                    <div className="flex justify-center items-center gap-3">
                    <h1 className="text-3xl font-bold">404</h1>
                    <span className="w-0.5 h-7.5 bg-black"></span>
                    <p className="text-lg font-medium capitalize">page not found</p>
                    </div>
                <NavLink to={'/'} className='text-3xl font-semibold capitalize hover:text-violet-800 trans'>
                    back to home
                </NavLink>
                </div>
            </div>
        </section>
    )
}

export default ErrorPage