import React from 'react'
import Pokemon from '../components/Pokemon'
import axios from 'axios'

export default class Pokedex extends React.Component {
    constructor(){
        super()
        this.state = {
            pokemon: []
        }
    }
    
    componentDidMount(){
        axios
        .get('/api/pokemon')
        .then(res=> {
            this.setState({
                pokemon: res.data
            })
        })
    }
    


    render(){
        return(
            <div>
                {this.state.pokemon.map(el => (
                    <Pokemon pokemonObj={el} key={el.id}/>
                ))}
            </div>
        )

    }
}