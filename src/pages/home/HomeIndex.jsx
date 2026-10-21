import Banner from "../../components/pages/home/Banner"
import Service from "../../components/pages/home/Service"
import Shelf from "../../components/pages/home/Shelf"
import NewArrival from "../../components/pages/home/NewArrival"

const HomeIndex = function(){

    return(
        <>
        <Banner></Banner>
        <Service></Service>
        <Shelf></Shelf>
        <NewArrival></NewArrival>
        </>
    )
}

export default HomeIndex