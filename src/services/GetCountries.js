const API = 'https://restcountries.com/v3.1'

export default function GetCountries({ keyword } = { keyword: 'all' }) {
  let url
  keyword === 'all' ? url = `${API}/all` : url = `${API}/region/${keyword}`

  let result = fetch(url)
    .then(response => response.json())
    .then(json => json.map(country => {
      const { population, region, capital, name, flags, latlng } = country

      return {
        name: name.common,
        population: population,
        region: region,
        capital: capital,
        key: [...latlng],
        flag: flags.png
      }
    }))
    .then(res => res.sort((a, b) => {
      return a.name.localeCompare(b.name)}))

    return result
}