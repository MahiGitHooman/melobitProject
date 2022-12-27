import { Image } from "react-bootstrap";

const TrendingArtist = ({ artist }) => {
  const { sumSongsDownloadsCount, fullName, image } = artist;
  console.log(artist);
  return (
    <div className="d-flex flex-column justify-content-center">
      <Image src={image?.cover_small?.url} roundedCircle={true} />
      <div className="text-center mt-1">
        <p style={{ marginBottom: "-5px" }}>{fullName}</p>
        <small>
          {sumSongsDownloadsCount}{" "}
          <span className="text-muted">Downloaded</span>
        </small>
      </div>
    </div>
  );
};

export default TrendingArtist;
