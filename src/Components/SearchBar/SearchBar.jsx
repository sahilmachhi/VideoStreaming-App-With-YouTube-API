import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { searchFromApi } from "../../Utils/FetchAPI";

function SearchBar() {
  const [suggetion, setSuggetion] = useState("none");
  const navigate = useNavigate();
  const [searchKey, setSearchKey] = useState([]);
  const [search, setSearch] = useState("");
  const debounceTimer = useRef(null);
  useEffect(() => {
    // Clear the previous timer before setting a new one
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }

    // Set a new timer for the API call with a delay
    debounceTimer.current = setTimeout(() => {
      if (search) {
        setSuggetion("flex");
        searchFromApi(search).then((res) => {
          setSearchKey(res.data);
        });
      }
    }, 500); // Adjust the debounce delay (e.g., 500ms) as needed

    // Clean up the timeout when the component unmounts
    return () => clearTimeout(debounceTimer.current);
  }, [search]);

  console.log(searchKey);
  const searchSubmit = (e) => {
    e.preventDefault();
    setSuggetion("none");
    navigate(`/search/${search}`);
  };
  return (
    <>
      <Paper
        component="form"
        onSubmit={searchSubmit}
        className="px-6 pl-3 border-e3e3e3 border-4 shadow-none flex items-center justify-center"
        sx={{
          borderRadius: 10,
          backgroundColor: "black",
          // display: { xs: "none", md: "block" },
          overflow: "visible",
          zIndex: 1,
          position: "sticky",
        }}
      >
        <input
          type="text"
          className="search-bar font-sans text-2xl py-1 bg-black text-white"
          placeholder="search here"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <IconButton aria-label="submit-search" id="search-submit">
          <SearchIcon className="text-white" />
        </IconButton>
        <div
          className="bg-white absolute left-0 px-6 pl-3 top-12 z-20 w-full  flex-col gap-2"
          style={{ display: suggetion }}
        >
          {searchKey.slice(0, 5).map((searchKey, index) => {
            console.log(searchKey.title);
            return (
              <div
                key={index}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(`/search/${searchKey.title}`);
                  setSearch("");
                  setSuggetion("none");
                }}
              >
                {searchKey.title}
              </div>
            );
          })}
        </div>
      </Paper>
    </>
  );
}

export default SearchBar;
