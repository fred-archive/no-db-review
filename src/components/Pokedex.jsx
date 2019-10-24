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
                <Link to='/tallgrass'>
                    <img src="http://gamepodunk.com/uploads//gallery/album_233/gallery_5549_233_6514.png" alt="image of tall grass"/>
                </Link>
                <h2>Pokedex</h2>
                {this.state.pokemon.map(el => (
                    <Pokemon pokemonObj={el} key={el.id}/>
                ))}
            </div>
        )

    }
}