import { useContext } from "react";
import { RestaurantContext } from "../../contexts/RestaurantContext";
import Map from "../Map";

const Bookmarks = () => {
  const { bookmarkedRestraunts } = useContext(RestaurantContext);

  return (
    <div className="space-y-10">
      {bookmarkedRestraunts.map((r, i) => (
        <Map key={i} location={r} />
      ))}
    </div>
  );
};

export default Bookmarks;
