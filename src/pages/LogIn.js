import React, { Component } from 'react';
import './style/App.css';
import firebase from './firebase.js';

class LogIn extends Component {
    constructor() {
        super();
        this.state = {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        city: '',
        zipcode: '',
        phone: '',
        focus: '',
        items: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.setState({
                      [e.target.name]: e.target.value
                      });
    }

    handleSubmit() {
        const itemsRef = firebase.database().ref('items');
        var gotin = 0;
        itemsRef.on('value', (snapshot) => {
                    let items = snapshot.val();
                    for (let item in items) {
                        if (items[item].email === this.state.email && items[item].password === this.state.password) {
                                window.location.href = '/dash';
                                gotin = 1;
                        }
                    }
                    });
        if (gotin === 0)
            alert("Incorrect");
    }
    render() {
        return (
                <div className='app'>
                <header className="SignInHeader">
                <div className="wrapper">
                <h1>Catalyst Miami Log In</h1>
                </div>
                </header>
                <div className='container'>
                <section className='add-item'>
                
                <input required type="email" name="email" placeholder="Email" onChange={this.handleChange} value={this.state.email} />
                <input required type="password" name="password" placeholder="New Password" onChange={this.handleChange} value={this.state.password} />
                <button onClick={this.handleSubmit}>Sign In</button>
    
                </section>
                </div>
                </div>
                );
    }
}
export default LogIn;

