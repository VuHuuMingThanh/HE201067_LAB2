import { Button, Card, ListGroup } from "react-bootstrap";
import { FaTimes } from "react-icons/fa";

function MovieDetail({ movie, onClose }) {
  if (!movie) return null;

  return (
    <Card className="mb-4 border-primary shadow">
      <Card.Header className="d-flex justify-content-between align-items-center">
        <strong>Movie Details</strong>
        <Button variant="outline-secondary" size="sm" onClick={onClose}>
          <FaTimes /> Close
        </Button>
      </Card.Header>
      <Card.Body>
        <Card.Title className="fs-4">{movie.title}</Card.Title>
        <ListGroup variant="flush" className="mb-3">
          <ListGroup.Item><strong>Genre:</strong> {movie.genre}</ListGroup.Item>
          <ListGroup.Item><strong>Year:</strong> {movie.year}</ListGroup.Item>
          <ListGroup.Item><strong>Rating:</strong> {movie.rating}</ListGroup.Item>
          <ListGroup.Item><strong>Director:</strong> {movie.director}</ListGroup.Item>
          <ListGroup.Item><strong>Duration:</strong> {movie.duration} minutes</ListGroup.Item>
        </ListGroup>
        <Card.Text>
          <strong>Description:</strong> {movie.description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default MovieDetail;
