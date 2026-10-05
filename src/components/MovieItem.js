import { Badge, Button, Card } from "react-bootstrap";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

function MovieItem({ movie, isFavorite, onToggleFavorite, onViewDetails }) {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Body className="d-flex flex-column">
        <Card.Title>{movie.title}</Card.Title>
        <div className="mb-2">
          <Badge bg="secondary">{movie.genre}</Badge>
        </div>
        <Card.Text className="mb-1">Year: {movie.year}</Card.Text>
        <Card.Text>
          Rating: <strong>{movie.rating}</strong>
        </Card.Text>

        <div className="mt-auto d-flex gap-2 flex-wrap">
          <Button
            variant={isFavorite ? "warning" : "outline-warning"}
            size="sm"
            onClick={() => onToggleFavorite(movie.id)}
          >
            {isFavorite ? (
              <><FaStar /> Unfavorite</>
            ) : (
              <><CiStar /> Favourite</>
            )}
          </Button>
          <Button
            variant="primary"
            size="sm"
            onClick={() => onViewDetails(movie)}
          >
            View Details
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default MovieItem;
