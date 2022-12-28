import { useParams } from "react-router-dom";
import { useGetSongDetailsQuery } from "../features/api/apiSlice";

const SongDetails = () => {
  const { id } = useParams();

  console.log(id);
  const {
    data: songs,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetSongDetailsQuery();

  return <h1>Song Details Details page</h1>;
};

export default SongDetails;
