import { useDispatch, useSelector } from "react-redux";
import { setSong, setPlay } from "../features/player/PlayerSlice";
import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";
import { Card } from "react-bootstrap";
const MusicImage = ({ data, id }) => {
  const dispatch = useDispatch();

  const { play, songId, audioTag } = useSelector((state) => state.player);

  const onClick = () => {
    dispatch(setSong(data));

    if (play && songId === id) {
      dispatch(setPlay(false));

      audioTag?.pause();
    } else {
      dispatch(setPlay(true));

      audioTag?.play();
    }
  };

  return (
    <>
      <div className="position-relative">
        <Card.Img variant="top" src={data?.img} />
        <div className="play-icon-container" onClick={onClick}>
          {play && songId === id ? (
            <FaPauseCircle
              color="white"
              size={60}
              className="play-icon position-absolute "
            />
          ) : (
            <FaPlayCircle
              color="white"
              size={60}
              className="play-icon position-absolute "
            />
          )}
        </div>
      </div>
    </>
  );
};

export default MusicImage;
