import { Container, Row } from "react-bootstrap";
import { useGetTrendingArtistQuery } from "../features/api/apiSlice";
import Header from "./Header";
import TrendingArtist from "./TrendingArtist";

const TrendingArtistList = () => {
  const {
    data: artists,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetTrendingArtistQuery();

  return (
    <Container className="my-5">
      <Header title=" Trending Artists" />
      <Row xs={1} sm={2} md={4} className="g-5">
        {artists?.results.map((artist) => {
          return <TrendingArtist key={artist?.id} artist={artist} />;
        })}
      </Row>
    </Container>
  );
};

export default TrendingArtistList;
