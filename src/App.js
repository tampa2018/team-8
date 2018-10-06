import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from './firebase.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
        firstname: '',
        lastname: '',
        email: '',
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
  handleSubmit(e) {
    e.preventDefault();
    const itemsRef = firebase.database().ref('items');
    const item = {
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        email: this.state.email,
        city: this.state.city,
        zipcode: this.state.zipcode,
        phone: this.state.phone,
        focus: this.state.focus,
    }
    itemsRef.push(item);
    this.setState({
      firstname: '',
      lastname: '',
      email: '',
      city: '',
      zipcode: '',
      phone: '',
      focus: ''
    });
  }
  componentDidMount() {
    const itemsRef = firebase.database().ref('items');
    itemsRef.on('value', (snapshot) => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          id: item,
          firstname: items[item].firstname,
          lastname: items[item].lastname,
          email: items[item].email,
          city: items[item].city,
          zipcode: items[item].zipcode,
          phone: items[item].phone,
          focus: items[item].focus
        });
      }
      this.setState({
        items: newState
      });
    });
  }
  render() {
    return (
      <div className='app'>
        <header>
            <div className="wrapper">
              <h1>Catalyst Miami Sign Up</h1>

            </div>
        </header>
        <div className='container'>
          <section className='add-item'>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="firstname" placeholder="First Name" onChange={this.handleChange} value={this.state.firstname} />
                    <input type="text" name="lastname" placeholder="Last Name" onChange={this.handleChange} value={this.state.lastname} />
                    <input type="text" name="email" placeholder="Email" onChange={this.handleChange} value={this.state.email} />
                    <input type="text" name="city" placeholder="City" onChange={this.handleChange} value={this.state.city} />
                    <input type="text" name="zipcode" placeholder="ZIP Code" onChange={this.handleChange} value={this.state.zipcode} />
                    <input type="text" name="phone" placeholder="Phone Number" onChange={this.handleChange} value={this.state.phone} />
                    <label> Focus Area </label>
                    <select name="focus" onChange={this.handleChange} value={this.state.focus}>
                        <option value="none">N/A</option>
                        <option value="health">Health</option>
                        <option value="wealth">Wealth</option>
                        <option value="politics">Politics</option>
                        <option value="relationships">Relationships</option>
                    </select>
                  <button>Sign Up</button>
                </form>
          </section>
        </div>
      </div>
    );
  }
}
export default App;
