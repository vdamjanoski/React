import { useEffect } from "react"

const EffectUnmount = ({toggleBool}) => {

    useEffect(()=>{
        console.log("First useEffect");
    }, [toggleBool])

    useEffect(()=> {
        console.log("Component mounted!");
        
        return() => console.log("Component will unmount");
    }, [])
    console.log("EffectUnmount component rendered!");
    
    return(
        <>
            <h2>Example of useEffect with cleanup function</h2>
        </>
    )
}
export default EffectUnmount