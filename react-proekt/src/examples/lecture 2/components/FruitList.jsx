import React from "react";

function FruitList(){
    const fruits = ["Orange", "Lemon", "Mango", "Pear", "Dragon Fruit"]


    return(
        <>
            <h3>List of fruits:</h3>
            {fruits.map((fruit, index)=> {
                return(
                    <React.Fragment key={index}>
                        <span>{fruit}</span> <br />
                    </React.Fragment>
                )
            })}
        </>
    )
}

export default FruitList