import Grandchild from "./Grandchild";

const Child = ({name, age, grandchildren}) => {
    return(
        <div className="child">
            <div>{name}</div>
            <div>{age}</div>
            <div className="grandchildren">
                {grandchildren.map((grandchild, index)=> (
                <Grandchild key={index} name={grandchild.name} hobby={grandchild.hobby}/>
            ))}
            </div>   
        </div>
    )
}

export default Child;