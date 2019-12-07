import React, {Component} from 'react';
import Post from "../Post/Post";
import './Blog.css';

class Blog extends Component {

    state = {
        posts: [],
    };

    async componentDidMount() {
        const response = await fetch('http://146.185.154.90:8000/messages');
        if (response.ok) {
            const posts = await response.json();
            this.setState({posts});
        }
    }

    render() {
        console.log(this.state.posts);
        return (
            <div className="Blog">
                {this.state.posts.map(post => (
                    <Post message={post.message} author={post.author}/>
                ))}
                <input type="text" className="main-input" placeholder="Ваш Текст"/>
                <input type="text" className="user-input" placeholder="Ваше Имя"/>
                <button className="btn-1">Отправить</button>
            </div>
        );
    }
}

export default Blog;