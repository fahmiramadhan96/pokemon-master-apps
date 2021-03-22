const listData = (data) => {
    const res = data.map(value => ({
        no: value.id,
        name: value.name,
        img: value.sprites && value.sprites.front_default,
        type: value.types && value.types.map(val => val.type && val.type.name),
        pokemonShow : true
    }))
    return res
}

export default listData