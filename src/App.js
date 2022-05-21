import React, {useMemo, useRef, useState} from "react";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput"
import MySelect from "./components/UI/select/MySelect";
import './styles/App.css'


function App() {

    const [posts, setPosts] = useState([
      {id: 1, title: ' Javascript', body: "Description"},
      {id: 2, title: ' Javascript12', body: "Description"},
      {id: 3, title: ' Javascript2', body: "Description"},
    ])

    const [filter, setFilter] = useState({sort: '', query: ''})
  
    const sortedPosts = useMemo (() => {
      if (filter.sort) {
        return [...posts].sort((a, b)=> a[filter.sort].localeCompare(b[filter.sort]))
      } 
      return posts
    }, [filter.sort, posts])

    const sortedAndSearchedPosts = useMemo(() => {
      return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
    }, [filter.query, sortedPosts])

    const createPost = (newPost) => {
      setPosts ([...posts, newPost])
    }

    const removePost = (post) => {
      setPosts(posts.filter(p => p.id !== post.id))
    }

  
    return (
      <div className="App">
        <PostForm create={createPost}/>
        <hr style={{margin: '15px 0'}}/>
        <PostFilter filter={filter} setFilter={setFilter}/>
        {sortedAndSearchedPosts.length>0 
          ? <PostList remove={removePost} posts={sortedAndSearchedPosts} title="List of posts 1"/> 
          : <h1 style={{textAlign: 'center'}}>Not Found</h1>}
      </div>
    );
  }
export default App;
