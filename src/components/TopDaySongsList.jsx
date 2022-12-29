import { Container, Row } from "react-bootstrap";
import Header from "./Header";
import { useGetTodayTrendingSongsQuery } from "../features/api/apiSlice";
import TopDaySong from "./TopDaySong";
import Loading from "../components/Loading";
import { toast } from "react-toastify";

const TopDaySongsList = () => {
  const {
    data: songs,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetTodayTrendingSongsQuery();

  // geting top ten day songs
  const topTen = songs?.results?.slice(0, 10);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return toast.error("Something went wrong ", error);
  }

  if (isSuccess) {
    return (
      <Container className="my-5">
        <Header title="Today top trending songs" />
        <Row xs={1} sm={2} md={3} className="g-4">
          {topTen?.map((topSong) => {
            return <TopDaySong key={topSong?.id} song={topSong} />;
          })}
        </Row>
      </Container>
    );
  }
};

export default TopDaySongsList;
