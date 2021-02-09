const fetch = require('node-fetch')

module.exports = async function buscaCep(uf, city, street) {
    const response = await fetch(`https://viacep.com.br/ws/${uf}/${city}/${street}/json/`)
    const json = await response.json()

    return json
}