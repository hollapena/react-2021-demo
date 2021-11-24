import './searchbar.css';


export default function SearchBar(props) {

    function submitted(ev){
        ev.preventDefault();
        console.log('submitted');
        props.addTerm(ev.target['keyword'].value);
    }
    return (
        <section className="searchBar">
            <form onSubmit={submitted}>
            <input 
            className="searchText" 
            type="text" 
            name="keyword" 
            placeholder="keyword"
            />
            <button 
            type="submit" 
            className="searchBtn" 
            name="searchBtn"
            >Search</button>
            </form>
            {props.term  && <p>You searched for {props.term}</p>}
        </section>
    );
}

// Another way you can do this is as a ternary operator, they're not as common but it'll work. 
//{ props.term? <p>You searched for {props.term}</p> : '' }