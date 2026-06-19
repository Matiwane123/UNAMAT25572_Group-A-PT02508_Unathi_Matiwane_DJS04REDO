export default function SearchBar({ value, onSearch }) {
  return (
    <div className="search-bar">
      <label htmlFor="search-input">Search</label>
      <input
        id="search-input"
        type="search"
        value={value}
        onChange={(event) => onSearch(event.target.value)}
        placeholder="Search podcasts by title"
        aria-label="Search podcasts"
      />
    </div>
  );
}
