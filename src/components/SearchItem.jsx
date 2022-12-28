import { Card, Col, Image } from "react-bootstrap";
import ReactAudioPlayer from "react-audio-player";
const SearchItem = ({ item }) => {
  console.log(item);
  if (item?.type === "song") {
    return (
      <Col>
        <Card className="">
          <Card.Img variant="top" src={item?.song?.image?.cover_small?.url} />
          <Card.Body>
            <Card.Title style={{ fontSize: "17px" }}>
              {item?.song?.title}
            </Card.Title>
            <Card.Text className="text-muted d-flex justify-content-between">
              <span>{item?.song?.artists[0]?.fullName}</span>
              <span>
                {item?.song?.downloadCount} <small>downloaded</small>
              </span>
            </Card.Text>

            <ReactAudioPlayer
              src={item?.song?.audio?.high?.url}
              autoPlay={false}
              controls
              style={{ width: "100%" }}
            />
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
