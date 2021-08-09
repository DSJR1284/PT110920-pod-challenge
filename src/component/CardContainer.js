import React, { Component } from 'react'
import Card from './Card'

export default class CardContainer extends Component {
  state = {
    cards: []
  } 
  
  getCards = () => {
    fetch('http://localhost:3000/cards')
    .then(resp => resp.json())
    .then(cards => {
      this.setState({
        cards: cards
      })
    })
  }

  componentDidMount(){
    this.getCards()
  }
  
  makeCards = () => {
    this.state.cards.map(card => <Card card={card}/>)
  }

  render() {
    return (
      <div>
        {this.makeCards()}
      </div>
    )
  }
}
