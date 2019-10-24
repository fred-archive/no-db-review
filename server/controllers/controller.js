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
    }
}