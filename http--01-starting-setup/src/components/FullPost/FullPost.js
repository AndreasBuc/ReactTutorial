import React, { Component } from 'react';
import axios from '../../axios';

import './FullPost.css';

class FullPost extends Component {

  state = {
    loadedPost: null,
  }

  componentDidUpdate() {
    if (this.props.post.id) {
      if ( !this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.post.id)) {
        axios.get('posts/' + this.props.post.id)
        .then(res =>{
          // console.log(res);
          this.setState({loadedPost: res.data})
        });
      }
    }
  }

  deletePostHandler = () => {
    axios.delete('posts/' + this.props.post.id)
      .then(res => {
        console.log(res)
      })
  }

  render () {
      let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;

      if (this.props.post.id) {
        post= <p style={{ textAlign: 'center' }}>Loading...</p>;
      }

      if(Object.keys(this.props.post).length !== 0 && this.state.loadedPost) {
        post = (
            <div className="FullPost">
                <h1>{this.state.loadedPost.title}</h1>
                <p>{this.props.post.body}</p>
                <div className="Edit">
                    <button onClick={this.deletePostHandler} className="Delete">Delete</button>
                </div>
            </div>

        );
      }

      return post;
  }
}

export default FullPost;
