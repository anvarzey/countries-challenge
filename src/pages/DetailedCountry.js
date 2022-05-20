import { useParams } from 'react-router-dom';
import '../styles/Details.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import useDetailedInfo from '../hooks/useDetailedInfo';

export default function DetailedCountry() {
  let { detailedName } = useParams();
  const navigate = useNavigate();

  const { country, borderLargeList } = useDetailedInfo({ detailedName });

  const handleReturnerBack = () => {
    navigate(-1);
  };

  return (
    <section>
      <div className='back-btn-container'>
        <button onClick={handleReturnerBack} className='back-btn'>
          <FontAwesomeIcon icon={solid('arrow-left')} />
          <span>Back</span>
        </button>
      </div>
      <div className='details-container'>
        <div className='detailed-flag-container'>
          <img src={country.flag} className='detailed-flag' alt='' />
        </div>
        <div className='detailed-text-container'>
          <h3 className='detailed-ctry-name'>{country.name}</h3>
          <div className='detailed-list-container'>
            <ul className='detailed-list'>
              <li>
                <span className='country-specs'>Native Name:</span>{' '}
                {country.native}
              </li>
              <li>
                <span className='country-specs'>Population:</span>{' '}
                {country.population}
              </li>
              <li>
                <span className='country-specs'>Region:</span> {country.region}
              </li>
              <li>
                <span className='country-specs'>Sub Region:</span>{' '}
                {country.subregion}
              </li>
              <li>
                <span className='country-specs'>Capital:</span> {country.capital}
              </li>
            </ul>
            <ul className='detailed-list'>
              <li>
                <span className='country-specs'>Top Level Domain:</span>{' '}
                {country.topLevelDomain}
              </li>
              <li>
                <span className='country-specs'>Currencies:</span>{' '}
                {country.currencies}
              </li>
              <li>
                <span className='country-specs'>Languages:</span>{' '}
                {country.languages}
              </li>
            </ul>
          </div>
          <div className='border-container'>
            <div className='border-title'>Border Countries:</div>
            <ul className='border-countries'>
              {borderLargeList.length > 0 ? (
                borderLargeList.map((e) => {
                  return (
                    <li className='border-country' key={e.name.common}>
                      {e.name.common}
                    </li>
                  );
                })
              ) : (
                <li className='border-country'>None</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
