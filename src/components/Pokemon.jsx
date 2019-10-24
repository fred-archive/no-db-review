import React from 'react'

export default class Pokemon extends React.Component {
    constructor() {
        super()
        this.state = {
            nickname: '',
            editToggle: false
        }
    }

    toggleEdit() {
        this.setState({
            editToggle: !this.state.editToggle
        })

        if (this.state.editToggle && this.state.nickname) {
            // console.log('test2')
            this.props.updateNameFn(this.props.pokemonObj.id, { name: this.state.nickname })
        }

    }

    handleChange(e) {
        this.setState({
            nickname: e.target.value
        })
    }

    render() {
        return (
            <div>
                <h3>{this.props.pokemonObj.name}</h3>
                <img
                    src={this.props.pokemonObj.img}
                    alt={this.props.pokemonObj.name}
                />
                <button onClick={() => this.toggleEdit()}>Rename</button>
                <button onClick={()=> this.props.deleteFn(this.props.pokemonObj.id)}>Release</button>

                {this.state.editToggle ? <input placeholder={this.props.pokemonObj.name} onChange={(e) => this.handleChange(e)} /> : null}
            </div>
        )
    }
}