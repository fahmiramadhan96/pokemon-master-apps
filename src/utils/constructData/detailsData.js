const detailData = (global, species) => ({
        no: global.id,
        name: global.name,
        smallImg: global.sprites && global.sprites.front_default,
        img:global.sprites && global.sprites.other ? (global.sprites.other.dream_world.front_default) : global.sprites.front_default,
        type: global.types && global.types.map(val => val.type && val.type.name),
        height: global.height ,
        weight: global.weight ,
        desc: species ? species.flavor_text_entries[0].flavor_text : '-',
    })

export default detailData