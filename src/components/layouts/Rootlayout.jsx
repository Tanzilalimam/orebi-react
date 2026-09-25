import { Outlet } from "react-router-dom"
import Nav from "./Nav"
import Cate from "./Cate"
import Footer from "./Footer"

const Rootlayout = function(){

    return(
        <>
        <Nav></Nav>
        <Cate></Cate>      
        <Outlet></Outlet>
        <Footer></Footer>
        </>
    )
}

export default Rootlayout