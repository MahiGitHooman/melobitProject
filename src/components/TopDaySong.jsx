import { Card, Col } from "react-bootstrap";
import ReactAudioPlayer from "react-audio-player";
const TopDaySong = ({ song }) => {
  const { title, artists, image, audio, downloadCount } = song; // distructuring the data from prop
  console.log(song);
  return (
    <Col>
      <Card className="">
        <Card.Img variant="top" src={image?.cover_small?.url} />
        <Card.Body>
          <Card.Title style={{ fontSize: "17px" }}>{title}</Card.Title>
          <Card.Text className="text-muted d-flex justify-content-between">
            <span>{artists[0]?.fullName}</span>
            <span>
              {downloadCount} <small>downloaded</small>
            </span>
          </Card.Text>

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

export default TopDaySong;
