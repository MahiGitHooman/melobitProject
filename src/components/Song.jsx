import { Card, Col } from "react-bootstrap";
import ReactAudioPlayer from "react-audio-player";
import { Link } from "react-router-dom";
const Song = ({ song }) => {
  const { title, artists, image, audio, id } = song; // distructuring the data from prop

  return (
    <Col>
      <Card>
        <Link to={`/search/${id}`}>
          <Card.Img variant="top" src={image?.cover_small?.url} />
        </Link>
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
