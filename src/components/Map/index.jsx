import { Button } from "@mui/material";
import { useContext } from "react";
import { RestaurantContext } from "../../contexts/RestaurantContext";

const Map = ({ location }) => {
  const { myAddedRestraunts, setMyAddedRestraunts, setBookmarkedRestraunts } =
    useContext(RestaurantContext);

  const handleRemove = () => {
    const res = myAddedRestraunts;

    console.log(res);

    const index = res.indexOf(location);
    if (index > -1) {
      res.splice(index, 1);
    }

    setMyAddedRestraunts((prev) => res);
  };

  const handleBookmark = () => {
    setBookmarkedRestraunts((prev) => [...prev, location]);
  };

  return (
    <div>
      <iframe
        className="!w-full h-[600px]"
        src={`https://datastudio.google.com/embed/reporting/430242fa-4162-4950-a984-824b3b355b3c/page/dQMwC?params={"ds2.name2": "${location}"}`}
        style={{ border: 0 }}
        allowFullScreen
      ></iframe>
      <div className="flex space-x-2 mt-2">
        <Button variant="contained" onClick={handleBookmark}>
          BookMark
        </Button>
        <Button variant="contained" color="error" onClick={handleRemove}>
          Remove
        </Button>
      </div>
    </div>
  );
};

export default Map;
