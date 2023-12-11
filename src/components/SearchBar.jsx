import "../styles/SearchBar.css";

const SearchBar = () => {
  return (
    <div>
      <form
        className="searchBar"
        onSubmit={(e) => {
          e.preventDefault();
        }}
        role="search"
      >
        <input type="text" id="searchBooks" placeholder="Search Books" required/>
        <button type="submit">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;