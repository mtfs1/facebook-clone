import react from "react"

import "./style.css"

function Post({post}) {
    return (
        <article className="post">
            <header>
                <img src={post.author.pic}/>
                <div>
                    <strong>{post.author.name}</strong>
                    <span>{post.time} .</span>
                </div>
            </header>
            <div className="likes-comments">
                <span>{post.likes} likes</span>
                <span>{post.comments} comments</span>
            </div>
            <hr/>
            <nav>
                <button>Like</button>
                <button>Comment</button>
                <button>Share</button>
            </nav>
            <hr />
            <form>
                <div>
                    <input type="text" placeholder="Comment something..." />
                </div>
            </form>
        </article>
    )
}

export default Post