import { useSelector } from "react-redux"

function Cart(){
    const cartItems = useSelector(state => console.log(state))
    return(
        <div>
            <h2>Shopping Cart</h2>

        </div>
    )
}
export default Cart