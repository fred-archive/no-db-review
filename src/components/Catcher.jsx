import React from 'react'

export default class Catcher extends React.Component{
    constructor(){
        super()
        this.state = {
            name: '', 
            img: '', 
        }
    }
    render(){
        return(
            <div>
                Catcher.js
            </div>
        )
    }
}