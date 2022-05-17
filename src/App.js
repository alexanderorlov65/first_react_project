import React, {useRef, useState} from "react";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput"
import './styles/App.css'


function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: ' Javascript', body: "Description"},
    {id: 2, title: ' Javascript12', body: "Description"},
    {id: 3, title: ' Javascript2', body: "Description"},
  ])

  const [post, setPost] = useState({title: '', body: ''})

  const addNewPost = (event) => {
    event.preventDefault()
    setPosts ([...posts, {...post, id: Date.now()}])
    setPost({title: '', body: ''})
  }

  return (
    <div className="App">
      <form>
        <MyInput type='text' placeholder='Name of post' value={post.title} onChange={(event)=>(setPost({...post, title:event.target.value}))}/>
        <MyInput type='text' placeholder='Description of post' value={post.body} onChange={(event)=>(setPost({...post, body:event.target.value}))}/>
        <MyButton onClick={addNewPost}>Create post</MyButton>
      </form>
      <PostList posts={posts} title="List of posts 1"/>
    </div>
  );
}

export default App;
