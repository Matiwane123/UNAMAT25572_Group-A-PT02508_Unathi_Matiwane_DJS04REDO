export default function GenreFilter({ genres, selectedGenre, onSelectGenre }) {
  return (
    <div className="genre-filter">
      <label htmlFor="genre-select">Filter by Genre:</label>
      <select
        id="genre-select"
        value={selectedGenre === null ? "" : selectedGenre}
        onChange={(event) =>
          onSelectGenre(
            event.target.value === "" ? null : parseInt(event.target.value),
          )
        }
      >
        <option value="">All Genres</option>
        {genres.map((genre) => (
          <option key={genre.id} value={genre.id}>
            {genre.title}
          </option>
        ))}
      </select>
    </div>
  );
}
