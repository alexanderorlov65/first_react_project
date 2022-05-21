import React, {useState} from 'react';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';


const PostForm = ({create}) => {

    const [post, setPost] = useState({title: '', body: ''})

    const addNewPost = (event) => {
        event.preventDefault()
        const newPost = {...post, id: Date.now()}
        create(newPost)
        setPost({title: '', body: ''})
      }

    return(
        <form>
          <MyInput type='text' placeholder='Name of post' value={post.title} onChange={(event)=>(setPost({...post, title:event.target.value}))}/>
          <MyInput type='text' placeholder='Description of post' value={post.body} onChange={(event)=>(setPost({...post, body:event.target.value}))}/>
          <MyButton onClick={addNewPost}>Create post</MyButton>
        </form>
    )
}

export default PostForm