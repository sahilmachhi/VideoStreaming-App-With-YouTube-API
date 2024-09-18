import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { searchFromApi } from "../../Utils/FetchAPI";
import NorthWestIcon from "@mui/icons-material/NorthWest";

function SearchBar() {
  const navigate = useNavigate();
  // const [activeSuggestion, setActiveSuggestion] = useState(0);
  const [suggetion, setSuggetion] = useState("none");
  const [searchKey, setSearchKey] = useState([]);
  const [search, setSearch] = useState("");
  const debounceTimer = useRef(null);
  const suggestionListRef = useRef(null);
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

  // const handleKeyDown = (e) => {
  //   if (e.key === "ArrowDown") {
  //     setActiveSuggestion((prevIndex) =>
  //       prevIndex < searchKey.length - 1 ? prevIndex + 1 : 0
  //     );
  //   } else if (e.key === "ArrowUp") {
  //     setActiveSuggestion((prevIndex) =>
  //       prevIndex > 0 ? prevIndex - 1 : searchKey.length - 1
  //     );
  //   }
  //   // } else if (e.key === "Enter" && searchKey.length > 0) {
  //   //   e.preventDefualt();
  //   //   setSearch(searchKey[activeSuggestion].title);
  //   //   navigate(`/search/${search}`);
  //   //   setSuggetion("none");
  //   // }
  // };

  const searchSubmit = (e) => {
    e.preventDefault();
    // setSearch(searchKey[activeSuggestion].title);
    navigate(`/search/${search}`);
    setSuggetion("none");
    // console.log(`search key:${searchKey[activeSuggestion].title}`);
    // console.log(`search var:${search}`);
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
          // onKeyDown={handleKeyDown}
        />
        <IconButton
          aria-label="submit-search"
          id="search-submit"
          onClick={(e) => {
            e.preventDefault();
            navigate(`/search/${search}`);
            setSuggetion("none");
          }}
        >
          <SearchIcon className="text-white" />
        </IconButton>
        <div
          className="absolute left-0 top-12 z-20 w-full bg-gray-700 flex-col rounded-md"
          style={{ display: suggetion }}
          ref={suggestionListRef}
        >
          {searchKey.slice(0, 5).map((searchKey, index) => {
            // const isActive = index === activeSuggestion;
            return (
              <div
                key={index}
                className={`py-2 pl-5 flex flex-row justify-between cursor-pointer bg-gray-700 hover:bg-gray-950 w-full`}
              >
                <p
                  className="text-white h-full w-full"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(`/search/${searchKey.title}`);
                    setSearch(searchKey.title);
                    setSuggetion("none");
                  }}
                >
                  {searchKey.title.length > 45
                    ? searchKey.title.substring(0, 45) + "..."
                    : searchKey.title}
                </p>
                <NorthWestIcon
                  className="w-full text-white h-full"
                  onClick={(e) => {
                    e.preventDefault();
                    setSearch(searchKey.title);
                    setSuggetion("none");
                  }}
                />
              </div>
            );
          })}
        </div>
      </Paper>
    </>
  );
}

export default SearchBar;
