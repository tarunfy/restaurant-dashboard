import Searchbar from "../Searchbar";
import Map from "../Map";
import { useContext } from "react";
import { RestaurantContext } from "../../contexts/RestaurantContext";

const Home = () => {
  const { myAddedRestraunts } = useContext(RestaurantContext);
  return (
    <div className="space-y-10">
      <Searchbar />
      <div className="space-y-8">
        {myAddedRestraunts.map((r, i) => (
          <Map key={i} location={r} />
        ))}
      </div>
    </div>
  );
};

export default Home;
