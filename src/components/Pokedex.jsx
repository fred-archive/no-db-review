import React from 'react'
import Pokemon from '../components/Pokemon'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class Pokedex extends React.Component {
    constructor(){
        super()
        this.state = {
            pokemon: []
        }
        this.updateName = this.updateName.bind(this)
        this.deletePokemon = this.deletePokemon.bind(this)
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

    updateName(id, body){
        axios
        .put(`/api/pokemon/${id}`, body)
        .then(res => {
            // console.log('test')
            this.setState({
            pokemon: res.data
        })}
        )
    }

    deletePokemon(id){
        axios.delete(`/api/pokemon/${id}`)
        .then(res => {
            this.setState({
                pokemon: res.data
            })
        })
    }
    


    render(){
        return(
            <div>
                <Link to='/tallgrass'>
                    <img src="http://gamepodunk.com/uploads//gallery/album_233/gallery_5549_233_6514.png" alt="image of tall grass"/>
                </Link>
                <h2>Pokedex</h2>
                {this.state.pokemon.map(el => (
                    <Pokemon
                     pokemonObj={el} key={el.id}
                     updateNameFn={this.updateName}
                     deleteFn={this.deletePokemon}
                     />
                ))}
            </div>
        )

    }
}