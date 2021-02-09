const fetch = require('node-fetch')

module.exports = async function climaCity(city, uf) {
    const response = await fetch(`https://api.hgbrasil.com/weather?key=0f6db603&city_name=${city},${uf}`)
    const json = await response.json()
    
    return json
}