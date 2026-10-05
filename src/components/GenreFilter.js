import { Form } from "react-bootstrap";

function GenreFilter({ genres, value, onChange }) {
  return (
    <Form.Group>
      <Form.Label className="fw-semibold">Genre</Form.Label>
      <Form.Select value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="All">All Genres</option>
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </Form.Select>
    </Form.Group>
  );
}

export default GenreFilter;
