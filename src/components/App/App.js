
import './App.css';
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';
import SearchHistory from '../SearchHistory/SearchHistory';
import {useState, useEffect} from 'react';
import SearchResults from '../SearchResults/SearchResults'


function App() {
  const name = 'Company Name';
  const [terms, setTerms] = useState([]);
  const [results, setResults] = useState([]);
  const [dataType, setDataType] = useState(['films']);

  function addTerm(term){
    setTerms([term, ...terms]);
    fetchData(term);
  }

  useEffect(() => {
    console.log('initial render complete');
    // fetchData();
  }, []);

  async function fetchData(keyword) {
      let url=`https://swapi.dev/api/${dataType}`;
      if(keyword){
        url += `/?search=${keyword}`;
      }
      let resp = await fetch(url);
      if(!resp.ok) throw new Error(resp.statusText);
      let data = await resp.json();
      setResults(data.results)
  }

  return (
    <div className="App">
      <Header company={name} />
      <SearchBar addTerm={addTerm} term={terms[0]}/>
      <main className="content">
        <SearchHistory terms={terms}/>
        <SearchResults results={results} />
      </main>
    </div>
  );
}

export default App;
