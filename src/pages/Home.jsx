import NewSongs from "../components/NewSongs";
import TopDaySongsList from "../components/TopDaySongsList";
import TopNavbar from "../components/TopNavbar";
import TrendingArtistList from "../components/TrendingArtistsList";

const Home = () => {
  return (
    <>
      <TopNavbar />
      <NewSongs />
      <TrendingArtistList />
      <TopDaySongsList />
    </>
  );
};

export default Home;
