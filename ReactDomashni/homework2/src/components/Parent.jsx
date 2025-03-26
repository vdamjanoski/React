import Child from "./Child";
import React from "react";

const Parent = ({name, children}) => {
    return(
        <div className="child">

            <div>{name}</div>
            <div className="children">
                {children.map((child, index)=> (
                <Child key={index} name={child.name} age={child.age} grandchildren={child.grandchildren}/>
            ))}
            </div>
        </div>
    )
}

export default Parent;