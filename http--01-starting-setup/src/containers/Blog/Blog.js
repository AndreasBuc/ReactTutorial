import React, { Component } from 'react';
import axios from '../../axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {

  state = {
    posts: [],
    selectedPost: {},
   }


  componentDidMount = () => {
    axios.get('/posts')
    .then(res=> {
      const posts = res.data.slice(0,4);
      const updatedPosts = posts.map(post => {
        return {
          ...post,
          author: 'Max'
        }
      })
      this.setState({
        posts: updatedPosts,
       })
    })
  }

  selectPostHandler = (id) => {
    const newPost =  [...this.state.posts].filter(post => post.id === id)[0]
    this.setState({selectedPost: newPost});

  }

  render () {



    const posts = this.state.posts.map(post=>{
      return <Post  postGotClicked={() =>{this.selectPostHandler(post.id)}}
                    author={post.author}
                    id={post.id}
                    title={post.title}
                    key={post.id}></Post>
    });

    return (
        <div>
            <section className="Posts">
                {posts}
            </section>
            <section>
                <FullPost
                  post={this.state.selectedPost} />
            </section>
            <section>
                <NewPost />
            </section>
        </div>
    );
  }
}

export default Blog;
