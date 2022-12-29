import NewSongs from "../components/NewSongs";
import Player from "../components/Player";
import TopDaySongsList from "../components/TopDaySongsList";
import TrendingArtistList from "../components/TrendingArtistsList";
import WeeklySongsList from "../components/WeeklySongsList";
import { useSelector } from "react-redux";
const Home = () => {
  const { url } = useSelector((state) => state.player);
  return (
    <div className="home-page">
      {url && <Player />}
      <NewSongs />
      <TrendingArtistList />
      <TopDaySongsList />
      <WeeklySongsList />
    </div>
  );
};

export default Home;
