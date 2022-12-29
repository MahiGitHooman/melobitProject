import { Container, Row } from "react-bootstrap";
import { useGetTrendingArtistQuery } from "../features/api/apiSlice";
import Header from "./Header";
import TrendingArtist from "./TrendingArtist";
import Loading from "../components/Loading";
import { toast } from "react-toastify";
const TrendingArtistList = () => {
  const {
    data: artists,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetTrendingArtistQuery();

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return toast.error("Something went wrong ", error);
  }

  if (isSuccess) {
    return (
      <Container className="my-5">
        <Header title=" Trending Artists" />
        <Row xs={1} sm={2} md={4} className="g-4">
          {artists?.results.map((artist) => {
            return <TrendingArtist key={artist?.id} artist={artist} />;
          })}
        </Row>
      </Container>
    );
  }
};

export default TrendingArtistList;
