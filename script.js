async function init() {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon")
    const data = await res.json()
    montarLista(data.results)
}
init()

async function montarLista(lista) {
    const ul = document.querySelector("ul")
    lista.forEach(async (item) => {
        const res = await fetch(item.url)
        const pokemon = await res.json()
        console.log(pokemon, 'pokemon')
        ul.insertAdjacentHTML("beforeend", `
        <li class=${pokemon.types[0].type.name}>
            <p>
                ${pokemon.name}
            </p>
            <img src=${pokemon.sprites.front_default} alt="">
        </li>
            
            `)
    })

}