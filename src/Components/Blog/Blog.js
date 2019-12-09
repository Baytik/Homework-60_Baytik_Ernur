import React, {Component} from 'react';
import Post from "../Post/Post";
import './Blog.css';

class Blog extends Component {

    state = {
        posts: [],
        author: '',
        message: ''
    };

     postMessages = () => {
        const url = 'http://146.185.154.90:8000/messages';
        const data = new URLSearchParams();
        data.set('message', this.state.message);
        data.set('author', this.state.author);
        fetch (url, {
            method: 'post',
            body: data,
        })
    };

     interval = () => {
       setInterval(() => {

       }, 1000)
     };

    changeHandler = (e) => this.setState({message: e.target.value});
    inputName = (event) => this.setState({author: event.target.value});

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
                <input type="text" className="main-input" placeholder="Ваш Текст" onChange={this.changeHandler}/>
                <input type="text" className="user-input" placeholder="Ваше Имя" onChange={this.inputName}/>
                <button className="btn-1" onClick={this.postMessages}>Отправить</button>
            </div>
        );
    }
}

export default Blog;