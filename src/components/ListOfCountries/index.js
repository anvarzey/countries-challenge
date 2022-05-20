import { useState, useEffect } from 'react';
import Card from '../Card';
import GetCountries from '../../services/GetCountries';
import Loader from '../Loader';
import './styles.css'

export default function ListOfCountries() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    GetCountries()
      .then((res) => {
      setCountries(res)
      setLoading(false)
      })
  }, []);

  if (loading) return <Loader />

  return (
    <>
        <div className='cards-container'>
          {countries.map((element) => (
            <Card
              key={element.key}
              flag={element.flag}
              name={element.name}
              population={element.population}
              region={element.region}
              capital={element.capital}
            />
          ))}
        </div>
    </>
  );
}
