import React from 'react'

export default class Pokemon extends React.Component{
    constructor(){
        super()
        this.state = {
            nickname: ''
        }
    }
    render(){
        return(
            <div>
                <h3>{this.props.pokemonObj.name}</h3>
                <img 
                    src={this.props.pokemonObj.img} 
                    alt={this.props.pokemonObj.name}
                />
            </div>
        )
    }
}