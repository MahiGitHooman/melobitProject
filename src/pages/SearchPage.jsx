import { Button, Container, Form, Row } from "react-bootstrap";
import { useState } from "react";
import { useGetSearchedSongsQuery } from "../features/api/apiSlice";
import SearchItem from "../components/SearchItem";

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
      console.log("Please enter sth");
      return;
    }
    setSkip(false);
  };

  return (
    <>
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

        <div className="my-5">
          <Row xs={1} sm={2} md={3} className="g-4">
            {songs?.results?.map((song) => {
              return <SearchItem key={song.id} item={song} />;
            })}
          </Row>
        </div>
      </Container>
    </>
  );
};

export default SearchPage;
