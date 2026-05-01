import { PostType } from "@/types";

type Params = {
    post: PostType,
}
const Post = ({post}: Params) => {
    return (
        <div>
            <div><p>{post.autor.username}</p></div>
            <p>{post.contenido}</p>
            <div>
                <p>{post.likes}</p>
                <p>{post.retweets.length}</p>
                <p>{post.comentarios.length}</p>
            </div>
        </div>
    );
}

export default Post;