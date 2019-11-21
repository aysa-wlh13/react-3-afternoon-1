// import React, { Component } from 'react';
// import axios from 'axios';

// import './App.css';

// import Header from './Header/Header';
// import Compose from './Compose/Compose';
// import Post from './Post/Post'

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       posts: []
//     };

//     this.updatePost = this.updatePost.bind( this );
//     this.deletePost = this.deletePost.bind( this );
//     this.createPost = this.createPost.bind( this );
//   }
  
//   componentDidMount() {
//     // axios (GET)
//     axios.get('https://practiceapi.devmountain.com/api/posts')

//     .then(res => {
//       // setState with response -> vehiclesToDisplay
//       this.setState({
//         posts: res.data
//       })
//     })
//   }

//   updatePost() {
//     // axios (GET)
//     axios.put('https://practiceapi.devmountain.com/api/posts?id=${ id }, {text}')

//     .then(res => {
//       // setState with response -> vehiclesToDisplay
//       this.setState({
//         posts: res.data

//       })
//     })
//   }

//   deletePost() {
//     // axios (GET)
//     axios.delete(`https://practiceapi.devmountain.com/api/posts?id=${ id }`)

//     .then(res => {
//       // setState with response -> vehiclesToDisplay
//       this.setState({
//         posts: res.data

//       })
//     })
//   }

//   createPost() {
//     // axios (GET)
//     axios.post('https://practiceapi.devmountain.com/api')

//     .then(res => {
//       // setState with response -> vehiclesToDisplay
//       this.setState({
        
//       })
//     })
//   }

//   render() {
//     const { posts } = this.state;
  
//     return (
//       <div className="App__parent">
//         <Header />
  
//         <section className="App__content">
  
//           <Compose />
          
//           {
//             posts.map( post => (
//               <Post 
//                 key={ post.id }
//                 text={post.text}
//                 date={post.date}
//                 id={post.id}
//                 updatePostFn={this.updatePost}
//                 deletePostFn={ this.deletePost } />
                
//             ))
//           }
  
//         </section>
//       </div>
//     );
//   }
// }

// export default App;

import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

import Header from './Header/Header';
import Compose from './Compose/Compose';
import Post from './Post/Post';

class App extends Component {
  constructor() {
    super();

    this.state = {
      posts: []
    };

    this.updatePost = this.updatePost.bind( this );
    this.deletePost = this.deletePost.bind( this );
    this.createPost = this.createPost.bind( this );
  }
  
  componentDidMount() {
    // axios (GET)
    axios.get('https://practiceapi.devmountain.com/api/posts')
    
    .then( res => {
    // setState 
      this.setState({ 
        posts: res.data 
      });
    });
  }

  updatePost( id, text ) {
    // axios (PUT)
    axios.put(`https://practiceapi.devmountain.com/api/posts?id=${ id }`, { text })

    .then( res => {
      // setState 
      this.setState({ 
        posts: res.data 
      });
    });
  }

  deletePost( id ) {
    // axios (DELETE)
    axios.delete(`https://practiceapi.devmountain.com/api/posts?id=${ id }`)
    
    .then( res => {
      // setState
      this.setState({ 
        posts: res.data 
      });
    });
  }

  createPost( text ) {
    // axios (POST)
    axios.post('https://practiceapi.devmountain.com/api/posts', { text })
    
    .then( res => {
      // setState 
      this.setState({ 
        posts: res.data 
      });
    });
  }

  render() {
    const { posts } = this.state;

    return (
      <div className="App__parent">
        <Header />

        <section className="App__content">

          <Compose createPostFn={ this.createPost }/>
          
          {
            posts.map( post => (
              <Post key={ post.id }
                    id={ post.id }
                    text={ post.text}
                    date={ post.date }
                    updatePostFn={ this.updatePost }
                    deletePostFn={ this.deletePost } />
            ))
          }

        </section>
      </div>
    );
  }
}

export default App;