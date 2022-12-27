import NewSongs from "../components/NewSongs";
import TopNavbar from "../components/TopNavbar";
import TrendingArtistList from "../components/TrendingArtistsList";

const Home = () => {
  return (
    <>
      <TopNavbar />
      <NewSongs />
      <TrendingArtistList />
    </>
  );
};

export default Home;
