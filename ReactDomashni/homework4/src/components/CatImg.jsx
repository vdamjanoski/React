const CatImg = ({url}) => {
    return(
        <img src={url} alt="Cat" style={{
            width: '400px',
            height: '400px',
            borderRadius: '50%'
        }}/>
    )
}
export default CatImg