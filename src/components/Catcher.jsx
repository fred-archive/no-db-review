import React from 'react'
import axios from 'axios'

export default class Catcher extends React.Component{
    constructor(){
        super()
        this.state = {
            name: '', 
            img: '', 
        }
    }
    componentDidMount(){
        //generate a random number (1-151)
        const pokeNum = Math.ceil(Math.random()*151)
        //make axios request to Pokemon API (with random number)
        axios
        .get(`https://pokeapi.co/api/v2/pokemon/${pokeNum}`)
        .then(res => {
            //then, set state (name and img url)
            // console.log(res)
            this.setState({
                name: res.data.name,
                img: res.data.sprites.front_default
            })
        })
    }

    runAway(){
        this.componentDidMount()
    }
    throwPokeBall(){
        axios
        .post('/api/pokemon', this.state)
        .then(res=> {
            this.props.history.push('/')
        })
    }

    render(){
        return(
            <div>
                <h3>{this.state.name}</h3>
                <img src={this.state.img} alt={this.state.name}/>
                <hr/>
                <button onClick={()=>this.throwPokeBall()}>Throw PokeBall!</button>
                <button onClick={()=>this.runAway()}>Run Away!</button>
            </div>
        )
    }
}