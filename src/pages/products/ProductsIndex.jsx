import Shelf from "../../components/pages/products/Shelf"
import Specification from "../../components/pages/products/Specification"
import Details from "../../components/pages/products/Details"
import Reviewtab from "../../components/pages/products/Reviewtab"

const ProductIndex = function(){

    return(
        <>
        <Shelf></Shelf>
        <Specification></Specification>
        <Details></Details>
        <Reviewtab></Reviewtab>
        </>
    )
}

export default ProductIndex