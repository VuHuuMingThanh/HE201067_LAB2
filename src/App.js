import { useMemo, useState } from "react";
import { Button, Card, Col, Container, Form, ListGroup, Row } from "react-bootstrap";
import { FaStar } from "react-icons/fa";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import GenreFilter from "./components/GenreFilter";
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";
import useLocalStorage from "./hooks/useLocalStorage";
import { movies } from "./datas/movies";

const FAVORITES_KEY = "movie_favorites";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [genre, setGenre] = useState("All");
  const [sortOrder, setSortOrder] = useState("default");
  const [selectedMovie, setSelectedMovie] = useState(null); 
  const [favorites, setFavorites] = useLocalStorage(FAVORITES_KEY, []); 

  
  const genres = useMemo(
    () => [...new Set(movies.map((m) => m.genre))].sort(),
    []
  );

  
  const displayedMovies = useMemo(() => {
    const keyword = searchTerm.trim().toLowerCase();

    let result = movies.filter(
      (m) =>
        m.title.toLowerCase().includes(keyword) &&
        (genre === "All" || m.genre === genre)
    );

    if (sortOrder === "desc") {
      result = [...result].sort((a, b) => b.rating - a.rating);
    } else if (sortOrder === "asc") {
      result = [...result].sort((a, b) => a.rating - b.rating);
    }
    return result;
  }, [searchTerm, genre, sortOrder]);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
    );
  };

  const favoriteMovies = movies.filter((m) => favorites.includes(m.id));

  return (
    <>
      <Header favoriteCount={favorites.length} />

      <Container className="pb-5">
        {/* Search / Filter / Sort */}
        <Row className="g-3 mb-3">
          <Col md={5}>
            <SearchBar value={searchTerm} onChange={setSearchTerm} />
          </Col>
          <Col md={4}>
            <GenreFilter genres={genres} value={genre} onChange={setGenre} />
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label className="fw-semibold">Sort by</Form.Label>
              <Form.Select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <option value="default">Default</option>
                <option value="desc">Rating: High to Low</option>
                <option value="asc">Rating: Low to High</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        {/* Tổng số phim đang hiển thị */}
        <h5 className="mb-3">Total movies: {displayedMovies.length}</h5>

        {/* Chi tiết phim */}
        <MovieDetail
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />

        {/* Danh sách phim */}
        <MovieList
          movies={displayedMovies}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
          onViewDetails={setSelectedMovie}
        />

        {/* Danh sách yêu thích */}
        <Card className="mt-5">
          <Card.Header>
            <strong>Favourite Movies ({favoriteMovies.length})</strong>
          </Card.Header>
          {favoriteMovies.length === 0 ? (
            <Card.Body className="text-body-secondary">
              No favourite movies yet.
            </Card.Body>
          ) : (
            <ListGroup variant="flush">
              {favoriteMovies.map((m) => (
                <ListGroup.Item
                  key={m.id}
                  className="d-flex justify-content-between align-items-center"
                >
                  <span>
                    {m.title} <small className="text-body-secondary">({m.year})</small>
                  </span>
                  <Button
                    variant="warning"
                    size="sm"
                    onClick={() => toggleFavorite(m.id)}
                  >
                    <FaStar /> Unfavorite
                  </Button>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Card>
      </Container>
    </>
  );
}

export default App;
