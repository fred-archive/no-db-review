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
            <div>Pokemon.js</div>
        )
    }
}