import react from "react"

import "./style.css"

import Post from "./Post"

function Main() {

    const post = {
        author: {
            pic: "https://scontent.fsjk2-1.fna.fbcdn.net/v/t1.0-9/83582428_1510185492464157_1520822321508515840_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeGYuF3vYurpyrT6BiF3NncUmcHl9jeYTNeZweX2N5hM15uoWF8fR-b_rwnbT5UR14pRH43NWsjqUqAmhYlsz2tr&_nc_ohc=mUopsOsQlZQAX8seyb8&_nc_ht=scontent.fsjk2-1.fna&oh=a1fca3ef742863d9ce06a5aff11218e1&oe=606E3CA7",
            name: "John Doe"
        },
        time: "8 h",
        likes: 3,
        comments: 5
    }

    let posts = []
    for (let i = 0; i < 5; i++) {
        posts.push(post)
    }

    return (
        <main id="initial-page-main">
            <div className="timeline">
                {posts.map(post =>
                    <Post post={post} />
                )}
            </div>
        </main>
    )
}

export default Main