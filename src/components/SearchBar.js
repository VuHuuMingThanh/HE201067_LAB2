import { useEffect, useRef } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

function SearchBar({ value, onChange }) {
  const inputRef = useRef(null);

  
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <Form.Group>
      <Form.Label className="fw-semibold">Search</Form.Label>
      <InputGroup>
        <InputGroup.Text>
          <FaSearch />
        </InputGroup.Text>
        <Form.Control
          ref={inputRef}
          type="text"
          placeholder="Search movies by title..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </InputGroup>
    </Form.Group>
  );
}

export default SearchBar;
