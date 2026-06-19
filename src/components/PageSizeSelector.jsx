export default function PageSizeSelector({ value, onChange }) {
  return (
    <div className="page-size-selector">
      <label htmlFor="pageSize">Items per page:&nbsp;</label>
      <select
        id="pageSize"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      >
        <option value={9}>9</option>
        <option value={18}>18</option>
        <option value={36}>36</option>
      </select>
    </div>
  );
}
