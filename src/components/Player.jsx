import { useEffect, useRef } from "react";
import { Col, Image, Row } from "react-bootstrap";
import { AiFillCloseCircle } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { reset, setPlay, setAudioTag } from "../features/player/PlayerSlice";
const Player = () => {
  const dispatch = useDispatch();

  const { url, img, artistName, songTitle } = useSelector(
    (state) => state.player
  );

  const audioRef = useRef();

  useEffect(() => {
    dispatch(setAudioTag(audioRef.current));
  }, [dispatch]);

  const onPlay = () => {
    dispatch(setPlay(true));
  };

  const onPause = () => {
    dispatch(setPlay(false));
  };

  return (
    <Row className="player d-flex align-items-center justify-content-center">
      <div className="close-icon-container" onClick={() => dispatch(reset())}>
        <AiFillCloseCircle size={25} color="#f12020" />
      </div>
      <Col className="d-flex align-items-center" md={3}>
        <Image src={img} width="75px" height="75px" rounded className="me-2" />
        <span className="me-5">
          <p className="fw-bold" style={{ marginBottom: "-5px" }}>
            {artistName}
          </p>
          <p>{songTitle}</p>
        </span>
      </Col>
      <Col md={9}>
        <audio
          src={url ? url : ""}
          autoPlay={true}
          onPlay={onPlay}
          onPause={onPause}
          ref={audioRef}
          id="player"
          controls
          style={{ width: "100%" }}
        />
      </Col>
    </Row>
  );
};

export default Player;
