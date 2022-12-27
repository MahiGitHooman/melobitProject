import { Container, Row } from "react-bootstrap";
import Header from "./Header";
import { useGetNewestSongsQuery } from "../features/api/apiSlice";
import Song from "./Song";
const NewSongs = () => {
  const {
    data: songs,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetNewestSongsQuery();

  return (
    <Container className="my-5">
      <Header title="New Songs" />
      <Row xs={1} sm={2} md={3} className="g-4">
        {songs?.results?.map((song) => {
          return <Song song={song} key={song?.id} />;
        })}
      </Row>
    </Container>
  );
};

export default NewSongs;
