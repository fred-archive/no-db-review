import React from 'react'
import Pokemon from '../components/Pokemon'

export default class Pokedex extends React.Component {
    constructor(){
        super()
        this.state = {
            pokemon: []
        }
    }
    render(){
        return(
            <div>
                Pokedex.js
                <Pokemon />
            </div>
        )

    }
}