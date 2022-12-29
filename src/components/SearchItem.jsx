import { Card, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import MusicImage from "./MusicImage";
const SearchItem = ({ item }) => {
  const data = {
    songId: item?.song?.id,
    url: item?.song?.audio?.high?.url,
    img: item?.song?.image?.cover_small?.url,
    artistName: item?.song?.artists[0]?.fullName,
    songTitle: item?.song?.title,
  };

  if (item?.type === "song") {
    return (
      <Col>
        <Card className="">
          <MusicImage data={data} id={item?.song?.id} />
          <Card.Body>
            <Link
              to={`/search/${item?.song?.id}`}
              className="text-decoration-none text-dark"
            >
              <Card.Title style={{ fontSize: "17px" }}>
                {item?.song?.title}
              </Card.Title>
              <Card.Text className="text-muted d-flex justify-content-between">
                <span>{item?.song?.artists[0]?.fullName}</span>
                <span>
                  {item?.song?.downloadCount} <small>downloaded</small>
                </span>
              </Card.Text>
            </Link>
          </Card.Body>
        </Card>
      </Col>
    );
  }

  if (item?.type === "artist") {
    return (
      <Col>
        <div className="d-flex flex-column justify-content-center">
          <Image
            src={item?.artist?.image?.cover_small?.url}
            roundedCircle={true}
          />
          <div className="text-center mt-1">
            <p style={{ marginBottom: "-5px" }}>
              {item?.artist?.fullName + " Artist"}
            </p>
            <small>
              {item?.artist?.sumSongsDownloadsCount}{" "}
              <span className="text-muted">Downloaded</span>
            </small>
          </div>
        </div>
      </Col>
    );
  }

  if (item?.type === "album") {
    return (
      <Col>
        <Card className="">
          <Card.Img variant="top" src={item?.album?.image?.cover_small?.url} />
          <Card.Body>
            <Card.Title style={{ fontSize: "17px" }}>
              Album <span className="text-muted">{item?.album?.name}</span>
            </Card.Title>
            <Card.Text className="text-muted">
              <span>
                {item?.album?.artists[0]?.sumSongsDownloadsCount}{" "}
                <small>downloaded</small>
              </span>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  }
};

export default SearchItem;
