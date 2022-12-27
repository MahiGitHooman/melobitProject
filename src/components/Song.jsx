import { Card, Col } from "react-bootstrap";
import ReactAudioPlayer from "react-audio-player";
const Song = ({ song }) => {
  const { title, artists, image, audio } = song;
  console.log(song);
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={image?.cover_small?.url} />
        <Card.Body>
          <Card.Title style={{ fontSize: "17px" }}>{title}</Card.Title>
          <Card.Text className="text-muted">{artists[0].fullName}</Card.Text>

          <ReactAudioPlayer
            src={audio?.high?.url}
            autoPlay={false}
            controls
            style={{ width: "100%" }}
          />
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Song;
