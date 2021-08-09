

import React, { Component } from 'react'

export default class Card extends Component {

    state = [

    ]

    componentDidMount() {
        fetch(`http://localhost:3000/cards`)
        .then(resp => resp.json())
        .then(json => {
            
        })
    }

    render() {
        return (
            <div>
                <h1></h1>
                
            </div>
        )
    }
}
