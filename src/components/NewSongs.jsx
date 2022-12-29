import { Container, Row } from "react-bootstrap";
import Header from "./Header";
import Song from "./Song";
import Loading from "../components/Loading";
import { toast } from "react-toastify";
import { useGetNewestSongsQuery } from "../features/api/apiSlice";
const NewSongs = () => {
  const {
    data: songs,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetNewestSongsQuery();

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return toast.error("Something went wrong ", error);
  }

  if (isSuccess) {
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
  }
};

export default NewSongs;
