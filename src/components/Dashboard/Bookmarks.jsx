import { useContext } from "react";
import { RestaurantContext } from "../../contexts/RestaurantContext";

const Bookmarks = () => {
  const { bookmarkedRestraunts } = useContext(RestaurantContext);

  return <div>{bookmarkedRestraunts.length}</div>;
};

export default Bookmarks;
