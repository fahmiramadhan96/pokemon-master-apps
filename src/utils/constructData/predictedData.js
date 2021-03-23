const predictedData = (global, type) => ({
    no: global.id,
    name: global.name,
    smallImg: global.sprites && global.sprites.front_default,
    img: global.sprites && global.sprites.other ? (global.sprites.other.dream_world.front_default) : global.sprites.front_default,
    experience: global.base_experience,
    damageAttack: {
        noDamage: type.damage_relations && type.damage_relations.no_damage_to.map(val => val.name),
        halfDamage: type.damage_relations && type.damage_relations.half_damage_to.map(val => val.name),
        doubleDamage: type.damage_relations && type.damage_relations.double_damage_to.map(val => val.name)
    },
    damageDefence : {
        noDamage: type.damage_relations && type.damage_relations.no_damage_from.map(val => val.name),
        halfDamage: type.damage_relations && type.damage_relations.half_damage_from.map(val => val.name),
        doubleDamage: type.damage_relations && type.damage_relations.double_damage_from.map(val => val.name)
    },
    type: global.types && global.types.map(val => val.type && val.type.name),

})

export default predictedData