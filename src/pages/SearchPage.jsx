import { Button, Container, Form, Row } from "react-bootstrap";
import { useState } from "react";
import { useGetSearchedSongsQuery } from "../features/api/apiSlice";
import SearchItem from "../components/SearchItem";
import Loading from "../components/Loading";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import Player from "../components/Player";
const SearchPage = () => {
  const [searchText, setSearchText] = useState("");
  // The skip state is used to skip for the first time when component is load
  const [skip, setSkip] = useState(true);

  const {
    data: songs,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetSearchedSongsQuery(!skip && searchText, {
    skip,
  });

  const onChange = (e) => {
    setSearchText(e.target.value);
    setSkip(true);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!searchText) {
      toast.error("Please write something in input");
      return;
    }
    setSkip(false);
  };

  const { url } = useSelector((state) => state.player);
  return (
    <div className="search-page">
      {url && <Player />}
      <Container>
        <Form className="d-flex mt-3" onSubmit={onSubmit}>
          <Form.Control
            type="text"
            placeholder="Search song, artist, album"
            onChange={onChange}
            value={searchText}
          />
          <Button type="submit" className="ms-2">
            Search
          </Button>
        </Form>

        {isLoading ? (
          <Loading />
        ) : isError ? (
          toast.error("something went wrong", error)
        ) : (
          <div className="my-5">
            {!isSuccess ? (
              <p className="d-flex align-items-center justify-content-center text-muted">
                Search songs, albums and artists
              </p>
            ) : (
              <Row xs={1} sm={2} md={3} className="g-4">
                {songs?.results?.map((song, _) => {
                  return <SearchItem key={_} item={song} />;
                })}
              </Row>
            )}
          </div>
        )}
      </Container>
    </div>
  );
};

export default SearchPage;
