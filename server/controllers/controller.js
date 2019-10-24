const pokemonCaught = []
let id = 0

module.exports = {
    catch: (req, res)=> {
        // add id to body 
        const newPokemon = {...req.body, id}
        //add new pokemon obj to pokemonCaught array
        pokemonCaught.push(newPokemon)
        //increment id
        id++
        //res.status(200).send updated array
        res.status(200).send(pokemonCaught)
    },
    getPokeDex: (req,res) => {
        res.status(200).send(pokemonCaught)
    },
    rename: (req, res) => {
        const {id} = req.params
        const {name} = req.body
        const index = pokemonCaught.findIndex(el=> el.id=== +id)
        pokemonCaught[index].name = name
        res.status(200).send(pokemonCaught)
    },
    release: (req, res) => {
        const {id} = req.params
        const index = pokemonCaught.findIndex(el => el.id === +id)
        pokemonCaught.splice(index, 1)
        res.status(200).send(pokemonCaught)
    }
}