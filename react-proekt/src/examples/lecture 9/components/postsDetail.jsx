import { useState } from "react"
import { useEffect } from "react"

function PostsDetail(){
    const [posts,setPosts] = useState()

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((data) => setPosts(data))
        .catch(err => console.log(err))
    }, [])
    return <div>
    <h1>Users Data</h1>
    {posts &&
    posts.map(post => {
        return (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        )
    })}
</div>

}
export default PostsDetail