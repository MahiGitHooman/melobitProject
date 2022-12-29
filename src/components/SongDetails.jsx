import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import ReactAudioPlayer from "react-audio-player";
import Loading from "../components/Loading";
import { toast } from "react-toastify";
import { useGetSongDetailsQuery } from "../features/api/apiSlice";

const SongDetails = () => {
  const { id } = useParams();

  const {
    data: SongDetails,
    isLoading,
    isSuccess,
    isError,
  } = useGetSongDetailsQuery(id);

  const date = new Date(`${SongDetails?.releaseDate}`);

  if (isLoading) {
    return (
      <div className="song-details">
        <Loading />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="song-details">{toast.error("Something went wrong ")}</div>
    );
  }

  if (isSuccess) {
    return (
      <div className="song-details">
        <div className="bg-light">
          <Container>
            <Link to="/search">
              <Button
                variant="none"
                className="my-4 btn btn-outline-primary"
                style={{ width: "140px" }}
              >
                Back
              </Button>
            </Link>
            <Row className="pt-5 align-items-center">
              <Col>
                <Image
                  src={SongDetails?.image?.cover?.url}
                  fluid={true}
                  roundedCircle
                />
              </Col>
              <Col className="ms-5">
                <h4>{SongDetails?.artists[0]?.fullName}</h4>
                <p className="text-muted">{SongDetails?.title}</p>
                <hr />
                <div className="text-muted">
                  <span>{date.toLocaleDateString("en-US")}</span>
                  <span className="mx-4">
                    {SongDetails?.downloadCount + " playes"}
                  </span>
                </div>
                <hr />
                <ReactAudioPlayer
                  src={SongDetails?.audio?.high?.url}
                  autoPlay={false}
                  controls
                  style={{ width: "100%" }}
                />
              </Col>
            </Row>
            <h4 className="mt-3 text-center">Song lyrics</h4>
            {SongDetails?.lyrics?.split("\n").map((text) => {
              return <p className="text-center">{text}</p>;
            })}
          </Container>
        </div>
      </div>
    );
  }
};

export default SongDetails;
