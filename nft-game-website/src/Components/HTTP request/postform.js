import React, { Component } from 'react'
import axios from 'axios'
import './styles.css'

export class Postform extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Name: '',
            Email: '',
            Contactno: '',
            Website: '',
            value: true
        }

    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
        //the stored value = the entered value every time the field changes
    }
    disabler = e => {

    }

    submisionHandler = e => {
        e.preventDefault()
        console.log(this.state.value)
        this.setState({ value: !this.state.value });
        console.log(this.state)
        axios.post("http://localhost:8082/api/user", this.state)
            .then(
                this.setState({ Name: '' }),
                this.setState({ Email: '' }),
                this.setState({ Website: '' }),
                this.setState({ Contactno: '' })
            )
            .then(response => {
                console.log(response)
                this.setState({ value: !this.state.value });
            }).catch(error => {
                console.log(error)
                this.setState({ value: !this.state.value });
            })
    }

    render() {
        const { Name, Email, Contactno, Website, value } = this.state
        return (

            <>
                <form onSubmit={this.submisionHandler}>
                    <label>Name</label><br /><br />
                    <input name='Name' onChange={this.changeHandler} value={Name}></input><br /><br />
                    <label>Email</label><br /><br />
                    <input name='Email' name="Email" value={Email} onChange={this.changeHandler}></input><br /><br />
                    <label>Contact No.</label><br /><br />
                    <input name='Contactno' value={Contactno} onChange={this.changeHandler}></input><br /><br />
                    <label>Website (Instagram,Facebook or website)</label><br /><br />
                    <input name='Website' value={Website} onChange={this.changeHandler}></input><br /><br />
                    <button disabled={!Name || !Email || !Contactno || !Website || !value}>
                        Submit
                    </button>
                </form>
            </>
        )
    }
}

export default Postform
