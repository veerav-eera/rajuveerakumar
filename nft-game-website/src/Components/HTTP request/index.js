import React, { Component } from 'react'
import axios from 'axios'
import {
    Section,
    SectionContainer
} from "./HTTPcomponents"

 export class Getlist extends Component {
    constructor(props) {
        super(props)

        this.state = {
            post : []
        }
    }

    componentDidMount() {
        axios.get("http://localhost:8082/api/allitems/")
            .then((response) => {
                console.log(response)
                this.setState({post:response.data})
            }).catch((error) => {
                console.log(error)
            });
    }

    render() {
        const {post} = this.state
        return (
            <Section>
                {
                    post.length ?
                    post.map(post => <div id={post.id}>{post.Accountholdername}</div>) :
                    null
                }

            </Section>
        )
    }
}

export default Getlist
