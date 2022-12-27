import NewSongs from "../components/NewSongs";
import TopDaySongsList from "../components/TopDaySongsList";
import TopNavbar from "../components/TopNavbar";
import TrendingArtistList from "../components/TrendingArtistsList";
import WeeklySongsList from "../components/WeeklySongsList";

const Home = () => {
  return (
    <>
      <TopNavbar />
      <NewSongs />
      <TrendingArtistList />
      <TopDaySongsList />
      <WeeklySongsList />
    </>
  );
};

export default Home;
