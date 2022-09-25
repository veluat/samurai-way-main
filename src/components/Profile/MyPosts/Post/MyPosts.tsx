import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post";

type MyPostsType = {}

const MyPosts: React.FC<MyPostsType> = (props) => {
    return (

        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                    <button>Remove</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message={'Hi, how are you?'} likesCount={15}/>
                <Post message={"It's my first post"} likesCount={20}/>
            </div>
        </div>


    );
}


export default MyPosts;