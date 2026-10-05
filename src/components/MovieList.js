import { Alert, Col, Row } from "react-bootstrap";
import MovieItem from "./MovieItem";

function MovieList({ movies, favorites, onToggleFavorite, onViewDetails }) {
  if (movies.length === 0) {
    return <Alert variant="info">No movies found.</Alert>;
  }

  return (
    <Row xs={1} md={2} lg={3} className="g-3">
      {movies.map((movie) => (
        <Col key={movie.id}>
          <MovieItem
            movie={movie}
            isFavorite={favorites.includes(movie.id)}
            onToggleFavorite={onToggleFavorite}
            onViewDetails={onViewDetails}
          />
        </Col>
      ))}
    </Row>
  );
}

export default MovieList;
