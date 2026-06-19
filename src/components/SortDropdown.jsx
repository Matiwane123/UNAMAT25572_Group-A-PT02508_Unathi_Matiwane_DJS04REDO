export default function SortDropdown({ value, onChange }) {
  return (
    <div className="sort-dropdown">
      <label htmlFor="sort-select">Sort by</label>
      <select
        id="sort-select"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        <option value="title">Title (A–Z)</option>
        <option value="seasons">Seasons (High to Low)</option>
        <option value="updated">Updated (Newest First)</option>
      </select>
    </div>
  );
}
