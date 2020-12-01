import React from 'react';
import Form from './form/Form.jsx'

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: 0,
            birth: "00/00/0000"
        }
        this.onChangeField = this.onChangeField.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeField (event) {
        this.setState ({
            [event.target.name]: event.target.value
        })
    }
      
    onSubmit () {
        let state = this.state;
        alert(`Your name is ${state.name}, you were born on ${state.birth}, your email is ${state.email}, and your phone number is ${state.phone}`)
    }

    render () {
        return (
            <div id="app_container">
                <h1 className="title">This is a form page!</h1>
                <Form onChangeField={this.onChangeField}/>
                <button id="btn" onClick={this.onSubmit}>Submit</button>
            </div>
        )
    }
} 