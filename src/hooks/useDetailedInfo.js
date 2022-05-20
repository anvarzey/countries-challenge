import React, {useState, useEffect} from 'react';


export default function useDetailedInfo({detailedName}) {
  const [country, setCountry] = useState({});
  const [borderShortList, setBorderShortList] = useState('')
  const [borderLargeList, setborderLargeList] = useState([])

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${detailedName}?fullText=true`)
      .then((response) => response.json())
      .then((country) => {
        const {
          population,
          region,
          subregion,
          capital,
          name,
          flags,
          latlng,
          tld,
          languages,
          currencies,
          borders,
        } = country[0];
        const nativeCode = Object.keys(name.nativeName);
        const currenciesCode = Object.keys(currencies);
        const languagesOfficial = Object.values(languages);

        if(borders) setBorderShortList(borders.join(','))

        return {
          name: name.common,
          native: name.nativeName[nativeCode[nativeCode.length - 1]].common,
          population: population,
          region: region,
          subregion: subregion,
          currencies: currencies[currenciesCode].name,
          capital: capital,
          key: [...latlng],
          flag: flags.png,
          topLevelDomain: tld,
          languages: languagesOfficial.join(', '),
        };
      })
      .then((single) => setCountry(single))
      .catch((err) => console.error(err));
    }, [detailedName]);

    useEffect(() => {
      const API = 'https://restcountries.com/v3.1/alpha';


      if (borderShortList) {
        fetch(`${API}?codes=${borderShortList}`)
        .then((response) => response.json())
        .then((res) => setborderLargeList(res))
        .catch((err) => console.error(err));
      }
    }, [borderShortList])

    return {country, borderLargeList}
  }