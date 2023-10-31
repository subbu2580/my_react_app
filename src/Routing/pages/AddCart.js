import { useContext } from "react";
import { Addcart } from "../Navigation";




const AddCart = () => {
    const carddetails = useContext(Addcart)
    const card = carddetails.cart


    return (
        <>
            {
                card.map((product) => {
                    return (
                        <>
                            <h3>{product.id}</h3>
                            <h2>{product.title}</h2>
                            <h2>${product.price}</h2>
                            <h3>{product.category}</h3>
                            <p>{product.description}</p>

                        </>
                    )

                })
            }

        </>

    )
}
export default AddCart;