
// converse la JSON:
let hero = {
    name: 'Superman',
    power: 1000,
    life: 100
}

{
    'heroes': [
        {
            'id': 1,
            'name': 'Superman',
            'power': 1000,
            'life': 100
        }
    ]
}

let json = JSON.stringify(hero)

document.write(json)

// coversie de la JSON la obiect:
json = '{"name":"Superman","power":1000,"life":100}'

hero = JSON.parse(json)

console.log(hero)