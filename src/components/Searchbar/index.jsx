import { Autocomplete, Button, CircularProgress } from "@mui/material";
import React, { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import { RestaurantContext } from "../../contexts/RestaurantContext";

const Searchbar = () => {
  const { filteredRestaurants, handleFilter, resetFiltered, addRestraunt } =
    useContext(RestaurantContext);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const [selected, setSelected] = useState(null);

  const handleAdd = () => {
    if (!selected.fields.Name) {
      return;
    }
    addRestraunt(selected.fields.Name);
  };

  return (
    <div>
      <div className="flex items-center space-x-3">
        <Autocomplete
          fullWidth
          open={isSearchOpen}
          onOpen={() => {
            setIsSearchOpen(true);
          }}
          onClose={() => {
            setIsSearchOpen(false);
          }}
          onChange={(e, v) => {
            setSelected(v);
          }}
          getOptionLabel={(option) => option.fields.Name}
          options={filteredRestaurants}
          noOptionsText="Type something to search"
          onBlur={() => {
            if (selected == null) {
              resetFiltered();
            }
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Restaurants"
              variant="filled"
              onChange={(e) =>
                handleFilter(e.target.value.toLowerCase().trim())
              }
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <React.Fragment>
                    {isSearchOpen ? (
                      <CircularProgress color="primary" size={20} />
                    ) : null}
                    {params.InputProps.endAdornment}
                  </React.Fragment>
                ),
              }}
            />
          )}
        />
        <Button onClick={handleAdd} size="large" variant="contained">
          Add
        </Button>
      </div>
    </div>
  );
};

export default Searchbar;
