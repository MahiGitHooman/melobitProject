import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import MusicImage from "./MusicImage";
const WeekSong = ({ song }) => {
  const { title, artists, image, audio, downloadCount, id } = song; // distructuring the data from prop

  const data = {
    songId: id,
    url: audio?.high?.url,
    img: image?.cover_small?.url,
    artistName: artists[0].fullName,
    songTitle: title,
  };

  return (
    <Col>
      <Card className="">
        <MusicImage data={data} id={id} />

        <Card.Body>
          <Link to={`/search/${id}`} className="text-decoration-none text-dark">
            <Card.Title style={{ fontSize: "17px" }}>{title}</Card.Title>
            <Card.Text className="text-muted d-flex justify-content-between">
              <span>{artists[0]?.fullName}</span>
              <span>
                {downloadCount} <small>downloaded</small>
              </span>
            </Card.Text>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default WeekSong;
