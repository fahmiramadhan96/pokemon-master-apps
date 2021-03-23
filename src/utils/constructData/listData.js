const listData = (data) => {
    const res = data.length > 0 ? data.map(value => (mappingData(value))) : [mappingData(data)]
    return res
}

const mappingData = (value) => ({
    no: value.id,
    name: value.name,
    img: value.sprites && value.sprites.front_default,
    type: value.types && value.types.map(val => val.type && val.type.name),
    pokemonShow : true
})

export default listData