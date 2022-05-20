import FilterMenu from '../components/FilterMenu';
import SearchBar from '../components/SearchBar';
import ListOfCountries from '../components/ListOfCountries';

export default function Home() {

  return (
    <>
      <div className='search-and-filter-container'>
        <SearchBar />
        <FilterMenu />
      </div>
      <ListOfCountries />
    </>
  );
}
