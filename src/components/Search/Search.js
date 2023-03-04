import React from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { useState } from "react";
import { GEO_API_URL, geoApiOptions} from "../../api.js";
import "./Search.css";

function Search(props) {
  const [search, setSearch] = useState(null);

  function loadOptions(input) {
    return fetch(
      GEO_API_URL + "/cities?minPopulation=100000&namePrefix=" + input,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      });
  };

  function handleChange(searchData) {
    setSearch(searchData);
    props.onSearchChange(searchData);
  }

  return (
    <AsyncPaginate className="search-bar"
      placeholder="Search for a city.                                     "
      debounceTimeout={600}
      value={search}
      onChange={handleChange}
      loadOptions={loadOptions}
    />
  );
}

export default Search;
