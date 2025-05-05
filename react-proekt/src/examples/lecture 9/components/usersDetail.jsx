import useFetchData from "../hooks/useFetchData"

function UserDetails(){
    const {data, loading, error} = useFetchData("https://jsonplaceholder.typicode.com/users")
    if(loading) return <p> Loading...</p>
    if(error) return <p>{error.message}</p>
    return <div>
        <h1>Users Data</h1>
        {data &&
        data.map(data => {
            return (
                <div key={data.id}>
                    <h3>{data.name}</h3>
                    <p>{data.username}</p>
                </div>
            )
        })}
    </div>
}
export default UserDetails