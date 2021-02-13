import React, { Component } from 'react'

export default class Post extends Component {

state={
    posts:[]
}

async componentDidMount(){
    const res=await fetch("https://jsonplaceholder.typicode.com/posts");
    const response=await res.json();
    this.setState({posts:response});
    
}

    render() {
        return (
            <div>
                <h1>Posts</h1>
             {
this.state.posts.map(post=>{
    return <div key={post.id}>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
    </div>
})

             }         
            </div>
        )
    }
}
