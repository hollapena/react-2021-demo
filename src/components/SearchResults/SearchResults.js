import './searchresults.css';

export default function SearchResults(props) {

    return (
        <ul className="results">
         {props.results.map(item => (<li key={item.episode_id}>{item.title}</li>))}
        </ul>
    )
}